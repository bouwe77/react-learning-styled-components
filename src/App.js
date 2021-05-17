import styled from "styled-components";

const Heading1 = styled.h1`
  font-family: Comic Sans MS;
  text-align: center;
`;

export default function App() {
  return (
    <>
      <Heading1>
        Learning Styled Components{" "}
        <span role="img" aria-label="tadaa">
          🎉
        </span>
      </Heading1>
      <h2>Start editing to see some magic happen!</h2>
    </>
  );
}
