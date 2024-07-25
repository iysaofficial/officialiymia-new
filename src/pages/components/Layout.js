import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';

const Layout = () => {
  return (
    <div className="screenshots-area bg-black-color ptb-100">
      <div className="container">
        <div className="process-section color-white text-center mb-5">
          <span className="sub-title">LAYOUT</span>
          <h2>Booth & Poster</h2>
        </div>

        <div className="screenshots-tabs">
          <Tabs>
            <TabList>
              <Tab>
                <i className="fa fa-file-alt"></i> {/* Ganti dengan ikon Font Awesome */}
                Poster
              </Tab>
              <Tab>
                <i className="fa fa-table"></i> {/* Ganti dengan ikon Font Awesome */}
                Booth
              </Tab>
            </TabList>

            <TabPanel>
              <Image
                  src="/images/screenshots/poster2.png"
                  className="img-fluid img-responsive"
                  layout="intrinsic"
                  width={500} // Sesuaikan lebar gambar
                  height={1000} // Sesuaikan tinggi gambar
                  alt="POSTER"
                />
            </TabPanel>

            <TabPanel>
              <Image
                  src="/images/screenshots/boothnew.png"
                  className="img-fluid img-responsive"
                  layout="intrinsic"
                  width={500} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="BOOTH"
                />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Layout;
