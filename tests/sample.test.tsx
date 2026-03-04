import { render, screen } from "@testing-library/react";

function SampleComponent() {
  return <button type="submit">クリック</button>;
}

describe("SampleComponent", () => {
  it("ボタンが表示される", () => {
    render(<SampleComponent />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
