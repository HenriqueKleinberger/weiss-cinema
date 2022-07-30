import { Separator, Message } from './styles';

interface IProps {
  searched: string;
  message: string;
}

const SearchMovieSeparator = ({ searched, message }: IProps) => {
  return (
    <>
      {searched && <Message>{`${message} "${searched}"`}</Message>}
      <Separator />
    </>
  );
};

export default SearchMovieSeparator;
