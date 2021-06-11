import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import NavBar from './NavBar'
import { Slide } from '@material-ui/core'

export default function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <NavBar />
    </Slide>
  );
}