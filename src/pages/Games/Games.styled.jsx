import styled from '@emotion/styled';


export const GameWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;

`;

export const GameTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const GameDescription = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const GameImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

export const GenreInfo = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const GamePageButton = styled.button`
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;

 
`;

export const GamesPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;


`;

export const GamesPageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const GenreSelectLabel = styled.label`
  font-size: 16px;
  margin-right: 8px;
`;

export const GenreSelec = styled.select`
  font-size: 16px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const ShowMoreButtont = styled(GamePageButton)`
  background-color: #2196f3;

  &:hover {
    background-color: #0b7dda;
  }
`;