import { NextPage } from '@utils';
import { MetaTags } from '@components';
import styles from './index.module.scss';

const Home: NextPage<any> = (payload) => {
  return (
    <>
      <MetaTags
        description='Aims to provide a panel to assist developers in managing their private servers. tools to create backups, setup docker apps, and more'
        pageUrl='/'
      />

      <section className={styles.info}>
        <div className='container'>
          <section>
            <h1>Manage your servers</h1>
            <h2>Like Aliens!</h2>

            <p>
              Tired of doing everyday DevOps tasks for your project?
              <br />
              Shellops provides you with app store to host applications on your
              servers.
              <br />
              One click install, pre configured and secure app deployments!
            </p>

            <a href='https://panel.shellops.io'>Continue to panel</a>
          </section>
          <img src='/assets/images/aliens.svg' alt='' />
        </div>
      </section>

      <section className={styles.mock}>
        <div className='container'>
          <img src='/assets/images/mock.svg' alt='' />
        </div>
      </section>
    </>
  );
};

export default Home;
