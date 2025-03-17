import { ClipLoader } from 'react-spinners';

export default function Loader() {
  return <ClipLoader color='red' loading='true' size={50} aria-label='Loading Spinner' data-testid='loader' />;
}
