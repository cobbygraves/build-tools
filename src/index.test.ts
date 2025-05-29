import { handleToggleTheme } from "./index";

describe("handleToggleTheme", () => {
  it("should toggle the dark-theme class on body", () => {
    document.body.className = "";
    handleToggleTheme();
    expect(document.body.classList.contains("dark-theme")).toBe(true);
    handleToggleTheme();
    expect(document.body.classList.contains("dark-theme")).toBe(false);
  });
});
