import {
  rest,
  RestRequest,
  ResponseComposition,
  RestContext,
  DefaultBodyType,
  ResponseTransformer,
} from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

interface configHandler<T extends ResponseTransformer<DefaultBodyType>> {
  path: string;
  method: "get" | "post" | "patch" | "delete" | "put";
  res: (req: RestRequest, res: ResponseComposition<DefaultBodyType>, ctx: RestContext) => T[];
}
const createMockServer = <T extends ResponseTransformer<DefaultBodyType>>(
  configHandler: configHandler<T>[]
) => {
  const handlers = configHandler.map((config) =>
    rest[config.method](
      `http://localhost:3000${config.path}`,
      (req, res, ctx) => res(...config.res(req, res, ctx))
      // res(ctx.status(400),ctx.json(config.res(req, res, ctx)))
    )
  );
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
};
export default createMockServer;
