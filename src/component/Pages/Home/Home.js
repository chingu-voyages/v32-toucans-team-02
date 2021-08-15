import React from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Navigator/Header/Header';
import Intro from '../../Intro/Intro';
import TestiomnialContainer from '../../testimonial/testimonial-container/testimonial-container';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        {console.log(this.props.logedIn)}
        <Header logedIn={true} />
        <Intro />
        <TestiomnialContainer />
      </Layout>
    );
  }
}
export default Home;
