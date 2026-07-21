import test from "node:test";
import assert from "node:assert/strict";
import {
  decodeJwtExpiryMs,
  isAuthenticationFailure,
  isCsrfFailure,
} from "../src/utils/authHttp.js";

test("401 is authentication failure", () => {
  assert.equal(isAuthenticationFailure(401, {}, { hadAuthHeader: false }), true);
});

test("legacy Spring Forbidden with bearer is authentication failure", () => {
  assert.equal(
    isAuthenticationFailure(403, { error: "Forbidden" }, { hadAuthHeader: true }),
    true,
  );
});

test("ACCESS_DENIED is not treated as authentication failure", () => {
  assert.equal(
    isAuthenticationFailure(403, { code: "ACCESS_DENIED" }, { hadAuthHeader: true }),
    false,
  );
});

test("403 without bearer is not authentication failure", () => {
  assert.equal(
    isAuthenticationFailure(403, { error: "Forbidden" }, { hadAuthHeader: false }),
    false,
  );
});

test("UNAUTHORIZED code is authentication failure", () => {
  assert.equal(
    isAuthenticationFailure(403, { code: "UNAUTHORIZED" }, { hadAuthHeader: false }),
    true,
  );
});

test("detects CSRF refresh failures", () => {
  assert.equal(isCsrfFailure({ message: "CSRF token validation failed" }), true);
});

test("decodes JWT exp claim", () => {
  const header = Buffer.from(JSON.stringify({ alg: "none", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({ exp: 1_700_000_000 })).toString("base64url");
  const token = `${header}.${payload}.sig`;
  assert.equal(decodeJwtExpiryMs(token), 1_700_000_000_000);
});
