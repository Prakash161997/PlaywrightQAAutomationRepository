const{test,expect}=require('@playwright/test');

test("1st",() => {
   expect(100).toBe(100)
})

test("2nd",() => {
   expect(12.6).toBe(12.6)
})

test.skip("3rd",() => {
   expect(12).toBeGreaterThan(11)
})

test("4th",() => {
   expect(12).toBeLessThan(13)
})

test("5th",() => {
   expect("prakash patil").toContain("prakash")
})

test("6th",() => {
   expect("prakash patil".includes("patil1")).toBeTruthy()
})

test("7th",() => {
   expect("prakash patil" === "prakash patil").toBeTruthy()
})

