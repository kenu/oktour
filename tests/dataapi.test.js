import getData from "./dataapi";

describe("GET metcoRegnVisitrDDList", () => {
  it("makes request and returns data", async () => {
    const data = await getData({numOfRows: 20});
    expect(data).toEqual(expect.any(Object));
    expect(data.response.body.items).not.toBeNull();
    expect(data.response.body.items.item.length).toBe(20);
  });
});
