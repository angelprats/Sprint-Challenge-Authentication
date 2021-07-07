const request = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig.js");

describe("server", () => {
    beforeEach(async () => {
    await db("users").truncate();
});



describe("POST /api/register", () => {
    it("can register user", () => {
    const credentials = {
        username: "vicking",
        password: "pass"
    };
    return request(server)
        .post("/api/register")
        .send(credentials)
        .then(res => {
        expect(res.status).toBe(201);
        });
    });
    it("it fails when passing invalid data", function() {
    const credentials = {};

    return request(server)
        .post("/api/register")
        .send(credentials)
        .then(res => {
        expect(res.status).toBe(500);
        });
    });
});


describe("POST /api/login", () => {
    it("login fails with invalid credentials", () => {
    const credentials = {
        username: "viking",
        password: "credentials"
    };
    request(server)
        .post("/api/login")
        .send(credentials)
        .then(res => {
        expect(res.status).toBe(401);
        });
    });
});

it("it fails when passing invalid data", function() {
    const credentials = {};

    return request(server)
    .post("/api/login")
    .send(credentials)
    .then(res => {
        expect(res.status).toBe(500);
    });
});
});
