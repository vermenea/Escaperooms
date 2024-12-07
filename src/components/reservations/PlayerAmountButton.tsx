import styled from 'styled-components';

interface PlayerAmountButtonProps {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}

const Button = styled.button<{ isSelected: boolean }>`
  padding: 1.4em;
  margin: 2px;
  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? '#F46811' : 'rgb(223, 222, 222)'};
  color: ${(props) => (props.isSelected ? 'white' : 'initial')};

  &:hover {
    background-color: #ff7f50;
    color: white;
  }
`;

const PlayerAmountButton: React.FC<PlayerAmountButtonProps> = ({
  title,
  onSelect,
  isSelected,
}) => {
  return (
    <Button onClick={onSelect} isSelected={isSelected}>
      {title}
    </Button>
  );
};

export default PlayerAmountButton;
