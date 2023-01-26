import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter/>", () => {
  it("should init with counter zero", () => {
    render(<Counter initialCount={0} />);

    const value = screen.getByTestId("countNumber").textContent;
    expect(value).toEqual("0");

    //screen.debug() //console.log();
  });

  //Botão Increment
  it("should increment 1 when click at increment button", () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole("button", { name: "Increment" });

    console.log(buttonIncrement);

    //testar se o botão está habilitado
    expect(buttonIncrement).toBeEnabled();

    //testar se o botão está adicionando +1 quando é clicado

    fireEvent.click(buttonIncrement);
    expect(screen.getByTestId("countNumber").textContent).toEqual("1");
  });

  //Botão Decrement
  it("should decrement 1 when click at decrement button", () => {
    render(<Counter initialCount={0} />);

    const buttonDecrement = screen.getByRole("button", { name: "Decrement" });

    expect(buttonDecrement).toBeEnabled();

    fireEvent.click(buttonDecrement);
    expect(screen.getByTestId("countNumber").textContent).toEqual("-1");
  });

  //Botão Restart
  it("should restart value when click at reset button", () => {
    render(<Counter initialCount={0} />);

    const buttonRestart = screen.getByRole("button", { name: "Restart" });

    expect(buttonRestart).toBeEnabled();

    fireEvent.click(buttonRestart);
    expect(screen.getByTestId("countNumber").textContent).toEqual("0");
  });

//   //Botão Switch Signs
//   it("should Switch Signs when click at Switch Signs button", () => {
//     render(<Counter initialCount={0} />);

//     const buttonswitchSigns = screen.getByRole("button", {
//       name: "Switch Signs",
//     });

//     expect(buttonswitchSigns).toBeEnabled();

//     fireEvent.click(buttonswitchSigns);

//     expect(screen.getByTestId("countNumber").textContent).toEqual("0");
//     expect(screen.getByTestId("countNumber").textContent).toEqual("-1");
//   });
});
