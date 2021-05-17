import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background-color:#ddd
}`;

const H1 = styled.h1`
  font-family: Comic Sans MS;
  text-align: center;
`;

const H2 = styled.h2`
  font-family: Comic Sans MS;
  color: darkgreen;
`;

const SpecialIntro = styled(Intro)`
  background-color: gray;
  border: 1px solid red;
  padding: 10px;
`;

const Thingy = styled.li`
  list-style: none;
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 25px;

  ${(props) => {
    return props.isEven ? `color: green` : `color:red`;
  }}
`;

const stuff = [2, 5, 3, 0, 7];

export default function App() {
  return (
    <>
      <GlobalStyles />
      <H1>
        Learning Styled Components{" "}
        <span role="img" aria-label="tadaa">
          🎉
        </span>
      </H1>
      <SpecialIntro>
        This is ugly, bet hey, it's styled with Styled Components{" "}
        <span role="img" aria-label="tadaa">
          😂
        </span>
      </SpecialIntro>

      <ul>
        {stuff.map((s) => (
          <Thingy isEven={s % 2 === 0}>{s}</Thingy>
        ))}
      </ul>
    </>
  );
}

function Intro({ className, children }) {
  return (
    <div className={className}>
      <H2>Introduction</H2>
      <p>{children}</p>
    </div>
  );
}
