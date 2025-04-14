"use client";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { JSX } from "react";

export default function Gallery(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-white">
        <div className="wrapper w-full h-screen">
          <section className="text-black  h-screen  w-full bg-white  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] w-full"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Check out our Gallery
              <br />
              Below 👇
            </h1>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <div className="grid grid-cols-12 gap-2">
            {/* left part */}
            <div className="grid gap-2 col-span-4">
              <figure className=" w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468180840_122156099600280990_5652886023481114793_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGosfeHWdeNU6xQhqmFDPk9sIwaeM1SneOwjBp4zVKd4ycf950eJ-iY1171pHE7UhmR4gRX4vQd4Y_0h4vHyCyn&_nc_ohc=5fRd84Iy3GQQ7kNvwF33_62&_nc_oc=Adm5Uz2P5koPauKiaoORL48cg99mXXs8ySAXA-wKYINVuLbTAWUPyyRNz9Ehxj47lMyL3OvQTbJh6FudrCMSg6fF&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=FZyY19_6UcCjNOLFpqG1iw&oh=00_AfEZ9P68Q_KTRtrwqgNdLdYRU9qs_OsfYHyCvPHPd80acg&oe=68029D8A"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className=" w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/485178567_122173566440280990_7850734021750542026_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH4KS0zFVPBpkE4UPRm8BfwVg1Sycl3LphWDVLJyXcumNTOS7anVhL7kCzjf8HmwmVvqVDdWwzm5Hd_CgxPh_AB&_nc_ohc=N6eq3MpsMJcQ7kNvwGIqCLz&_nc_oc=Adl8Jm5d54wEDJDUHoaZSDFUDNio5hsGVSAdFUBm9gHThJhknDZNlCOsB6uKf9HPOv9Uam04G9oEQXjdT-HSOCzY&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=-wye-0ukhcoZ7IARmxY7Rw&oh=00_AfEaAPTQZW9XXznfJFKRSkwgyWqm16dqjMaI43TLkGSTug&oe=6802B43C"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className=" w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/482349741_122172187718280990_2739300049283754482_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUHCaEnAkFM8i9opy-G4KmpXAqA8RUMHalcCoDxFQwdm2AjS8Mh4jWuwgGRm444L47T5x_cBxW7wkRqIYzFyoi&_nc_ohc=fLBmZS5kzOwQ7kNvwGYjSI5&_nc_oc=AdlIDZiV0sFadtS3ZN3jo6xl9x6stJR-7Wgr1z8gEOuF3sQFrpTR32f8HqYx_xFjowTkLKmAySDXVm8_4APDCzf6&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=_AflTCjKKxVrLW4JY239hQ&oh=00_AfFXfyAOyWzuVdTOBPdC3eSPnkqvMjdKs8YdoEohnWBPAw&oe=6802B5C3"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/485695999_122173566590280990_7635669229207012647_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEtxYw11Fs-5Pnzr9t7OF2ia_mMQFNDPlVr-YxAU0M-VX921TNWZZcJLVatY8G8yzmbEPlRQbkXk_WbwgUcfyBo&_nc_ohc=aNCZPDDMvyQQ7kNvwGBqM0d&_nc_oc=AdlaP1rSwmHyT7sE25tJUSXXyRzs-D7g-Ucodt7cPpPacdOFfhDx8jpBt6f4r-0fiCkDCN-ZQnZBviu21ecOSwXv&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=jHXpj_WhzmM2O3tskO8auA&oh=00_AfFx1CY9G3w3TQWvebNyRwWhRSqUB1IShLsORJU_aYXpkQ&oe=6802BFBE"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468280244_122156099624280990_5567984383617535475_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8iYubexTbD0ud6qwqKBo9Ohyoh_y-_Wg6HKiH_L79aCVdEdyMnn26VskV-1U9PzDTJi0wG61aZEpx2h3S3GdB&_nc_ohc=FAjyXKxIfgQQ7kNvwGPpnCB&_nc_oc=AdkyCyTy9xIWzouH9yqNPkmYagcA7JUBIc9Q3z-9xqdJSz0Aw2MkVx5Csbc1FaEQSp-mxJKQQgfnwgGSq7_GbFEz&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=h_ULxXPjsVkCl32nAratYQ&oh=00_AfGNNEzJIz95nF25jO1V9YoXkU0Q4a0qYVh_wAw5ETZEPQ&oe=6802B34A"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            {/* sticky part */}
            <div className="sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3">
              <figure className="w-full h-full ">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468443219_122156099210280990_5550073638748338790_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHphMkCF-ZFPWFiew0t6u4TcitSRQx0afpyK1JFDHRp-lmSMdIVBhFh6PSSFGRxq8Ss2Wle9kDJsk32xUSaYxVM&_nc_ohc=2Zg1lQQU1CYQ7kNvwG8ua-3&_nc_oc=Adn-cGIMpbqyuG3TIYZZVq3gPqJjlK7OXZEZMCAZqtGfoUNYFhILZ1Oaspbo2NziD36rb5nl_99u_rS8gkXp5l2C&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=QmiLSTBU8IozqsITVQpmnQ&oh=00_AfEjHiHtOxfko_8RFUzVNfmaQEfv5dEgJ67Z3P1-FXNydg&oe=6802A8D3"
                  alt=""
                  className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full h-full ">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/485373378_122173566464280990_3157551381435828419_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFuksR9TDw8lEgYRJ9kcwv0eIaVI28h8wZ4hpUjbyHzBjfOMig_aClZ8A41IdoIL3uFAEZTv9x31axd0arxAsM6&_nc_ohc=MjLCs9DUCxUQ7kNvwGIfA9U&_nc_oc=Adnb-ambOqQQMMu1QPBv7fPdNjUSUIic1ZUCGSTOqV1L--cdGeSY3oXjybW9f_kNbBh9_VqTVadg5Jh8d0LrmKQG&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=2udUCxSFZvM4Dk7RbKamfg&oh=00_AfFvq_Nk2TLZm7nRGaq0xX3B-waDZ1aCGclpg5eJnfv6-w&oe=6802ABAD"
                  alt=""
                  className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full h-full ">
                <img
                  src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/485161378_122173566536280990_3215468964098545899_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_ONgzYNfaYJ42Bp15_UnqcoArN81R6FlygCs3zVHoWTi5eGiBckgnF87tON2MLnEu7rE_pEavtDW31umKqsMH&_nc_ohc=HqT0jUab3XYQ7kNvwGp99b2&_nc_oc=Adma16n7FWW92da42NlintB6fBznhEdqWslrF1yd9o0iso31Hxw44n7w4pYy-xiSpgz2S8ADXsbWImdPTvFxt545&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=zxij0nUq41iKB4RMYPCPog&oh=00_AfHFiHi-2DFb3RkfAd-oY7nJ_-yUdK0zJJJbCRo_0JlZ7Q&oe=6802B31B"
                  alt=""
                  className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            {/* right part */}
            <div className="grid gap-2 col-span-4">
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468410832_122156099618280990_5025070130464799005_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFltxVDjgkHSPg3YH282ntn10qFobZYEuXXSoWhtlgS5R8oaSr2rX5U0aQ9P-Vhd6eDu9EnHmHkRn3aXPm6vsFu&_nc_ohc=GXs5aBdgWE4Q7kNvwFFes96&_nc_oc=AdmDIuBSx8FOqBC2K4vQ7-qoCSUwdxot_AJrj1lyGjvmYWWpz3DHHu-xVvBu_7LKpxKPcChN88l4Gw0u7sWcuOsN&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=QD-NM4dHA_5avQpjzf_bVg&oh=00_AfEYCz5ndl9ecGFpmTZAz_SQEKzejpP8Woj1otHKVc2xeQ&oe=68029D6D"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468392305_122156099810280990_1622946268460036621_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGAo1TSRot_nM04RiGAtUvTX3JwOEOLe5NfcnA4Q4t7qw8AnXZ4g9Q0Drq8UKrDoIOsen3Wzor1CjTXsuMxxXO&_nc_ohc=tfCCHLsHNHcQ7kNvwH1nO0I&_nc_oc=Adkvt67tiWa4x54np_s43VkoQ_fLU0eMg4ZOhGEcMJj3JlInbd6K9yNxWOoP2eVMHQTO4g5LLsMtiU6LlFpUYQ1y&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=aQKP7z-30WhOfQWOZ0pzjw&oh=00_AfEYY18kBGbzwjMbTsasGE1xYr1mQh31DteW5YPlLfbC9Q&oe=6802954E"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/486583300_122174820128280990_7271663169720455289_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFn9O4oquQA8-0v2uPz9lBn2ys90sop-0DbKz3Syin7QEDK2nzAfVOrR-d-ro_bBD_4r9E0VbNC3DPYa2IW1r3S&_nc_ohc=2ohXbZgEwoQQ7kNvwEb0GEI&_nc_oc=AdkK5BGA2e5Mh-R9gOd6tmwsMnr1CGyjziS9lQ5P1vCyL4wxb7yVxb-2NgZhT5HyPWz4C_3JwIvFcsw_HR5HX2DD&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=De-yEQ_6YP0UPMugLTdj4A&oh=00_AfEjs_cfnJj45Mzp7tkfL5QnRpOp9MH01J5p2ms45DhvJA&oe=6802971C"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468448952_122156101694280990_7481644670760543612_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHNdA9OE1pai5IU--wNUteuEaepglHODDgRp6mCUc4MOHHrHhfrz4K3u_0FyyYK_NWV5nZ42O9c7_Og8a6NlPV3&_nc_ohc=f7cdpIOqZJgQ7kNvwHh_bZ0&_nc_oc=AdmezbVpA_1TVW9l24wD9AEM9RJ1iIZ49upnuMa0gt84tQvkvZSZUdGlmA3kFSgaTtNGxPmFvYXDESffJQ0v3-Fu&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=iN1uXDUPvp3PuRpwwdjBCg&oh=00_AfFsJklVOC-mXS22t0K5HV9193GAlG5I5snrjcXtD2O1wQ&oe=6802A7A3"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/468429104_122156102090280990_724293288686987838_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEH11TGXDvdfaozZGrWyB9lcueh_7PDGBxy56H_s8MYHMShtyxW8Ur5tGfdnfMr8E60VRbevuKeJRrsv_CBkDyb&_nc_ohc=-4UskWQ5INwQ7kNvwGKRiyZ&_nc_oc=AdlhZ2maaXwgZbBrGQu2vycgztZq0HreKPLSh2Wo6KmQyi5hoMEB0bXL7xGhZKmCcJ2_OiNHXFRSSpWOvjFBWgvA&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=8tfLuFFa6HdsaMwGzvvvsg&oh=00_AfFY-KCV-Rn-CuTmxIAI4zArM1HvbWubv2xuOJKt0f6v7g&oe=68029616"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className="group bg-white ">
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            Daily Fitness
          </h1>
          <div className="bg-slate-200 blur-2xl h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </footer>
      </main>
    </ReactLenis>
  );
}
