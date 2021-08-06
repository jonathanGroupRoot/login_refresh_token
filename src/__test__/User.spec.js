const app = require("../app");
const request = require("supertest");
const connection = require('../database');

describe("Users", () => {

    afterAll(() => {
        connection.close();
    });

    it("CreateUser", async () => {
        const response = await request(app).post("/createUser").send({
            name: "Jonathan Vinicius",
            username: "jonathanRoot",
            email: "jonathangrouproot@gmail.com",
            password: "12345"
        });

        expect(response.ok).toBeTruthy();
    });
});