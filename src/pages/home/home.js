import CardFill from '../../component/Card/Card';
// import Header from './component/header/header';
import Hero from '../../component/hero/hero';
import Detail from '../../component/section/room';
import data from '../../component/Card/data';
// import SignIn from './component/signin/signIn';
import Footer from '../../component/footer/footer';
// import SignUp from './component/signup/SignUp';

function Home() {
  const Cards = data.map((item) => {
    return (
      <CardFill
        img={item.coverImg}
        title={item.title}
        price={item.price}
        span={item.span}
      />
    );
  });
  return (
    <div>
      <Hero />
      <Detail />
      <div className="cardcontainer">{Cards}</div>
      <Footer />
    </div>
  );
}

export default Home;
