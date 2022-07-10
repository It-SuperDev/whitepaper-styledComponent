import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import * as Styled from '../style';

const Sidebar = () => {
  const list = [
    { name: 'Introducing WDOX DAO', id: 'introducing', icon: 'book' },
    { name: 'Background', id: 'background', icon: 'background' },
    { name: 'WDOX Environment', id: 'environment', icon: 'globe' },
    { name: '$WDOX', id: 'WDOX', icon: 'dollar' },
    { name: 'DAO', id: 'dao', icon: 'dao' },
    { name: 'NFT', id: 'nft', icon: 'nft' },
    { name: 'DEX', id: 'dex', icon: 'dex' },
    { name: 'Team', id: 'team', icon: 'team' },
    { name: 'Links', id: 'links', icon: 'link' },
  ]

  const [menu, setmenu] = useState(false);
  const [listItem, setlist] = useState(0);
  const [showTopBt, setshowTopBt] = useState(true)

  const handleList = (i: number) => {
    setmenu(false)
    setlist(i)
  }

  const gotop = () => {
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 480) {
        setshowTopBt(true)
      } else {
        setshowTopBt(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Box>
      <Styled.PaperWrap container>
        <Styled.SidbarGrid>
          {/* @ts-ignore */}
          <Styled.SideBar menu={menu} >
            <Styled.SidebarLogo />
            <Styled.SidebarItems>
              {
                list.map((item, i) => (
                  <a href={`#${item.id}`} key={i}>
                    {/* @ts-ignore */}
                    <Styled.SidebarItem container listitem={listItem} select={i} onClick={() => handleList(i)}>
                      <Styled.SidebarIcon><img src={`./assets/img/sidebar/${item.icon}.svg`} alt="" /></Styled.SidebarIcon>
                      <Styled.SidebarName>{item.name}</Styled.SidebarName>
                    </Styled.SidebarItem>
                  </a>

                ))
              }
            </Styled.SidebarItems>
          </Styled.SideBar>
          {
            menu ? <Styled.CloseBack onClick={() => setmenu(false)} /> : null
          }
        </Styled.SidbarGrid>
        <Styled.PaperMain className='main'>
          {
            showTopBt ? <Styled.GoTop src='./assets/img/go.svg' onClick={() => gotop()} /> : null
          }

          <Styled.BackgroundCircle>
            <Styled.Circle1 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle1>
            <Styled.Circle2 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle2>
            <Styled.Circle3 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle3>
            <Styled.Circle4 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle4>
            <Styled.Circle5 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle5>
            <Styled.Circle6 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle6>
            <Styled.Circle7 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle7>
            <Styled.Circle8 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle8>
            <Styled.Circle9 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle9>
            <Styled.Circle10 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle10>
            <Styled.Circle11 ><Styled.CircleImg src='./assets/img/background.svg' alt='' /></Styled.Circle11>
          </Styled.BackgroundCircle>

          <Styled.HeaderMenu className='menu'>
            <img src='./assets/img/sidebarLogo.png' alt='' />
            <img src='./assets/img/menu.svg' alt='' onClick={() => setmenu(!menu)} />
          </Styled.HeaderMenu>

          <Styled.PaperBox>
            <Styled.ItemBlock xs={12} container item>
              <Styled.PageTitle>White Paper</Styled.PageTitle>
              <Styled.Title id="introducing">Introducing WDOX DAO</Styled.Title>
              <Styled.MHr />
              <Styled.FirstSubTitle>WDOX DAO is the first decentralized regulation ecosystem within Web3.</Styled.FirstSubTitle>
              <Styled.MHr />

              <Styled.First xs={12} container item>

                <Styled.Including xs={12} container item>
                  <Grid xs={12} md={3} item sm={6}>
                    <Styled.IncludItemOne>
                      <Styled.IncludLogo><img src='./assets/img/dex.svg' alt="" /></Styled.IncludLogo>
                      <Styled.IncludDesc>
                        <Styled.IncludDescHead>DEX</Styled.IncludDescHead>
                        <Styled.IncludDescBody>The WDOX DEX was created to allow WDOX swaps at incredibly low fees. The fees charged to developers/projects to be verified will be put back into our own liquidity pools; allowing for lower slippage and lower fees. Accepted token support: USDT, USDC, ETH, DAI, UST, WBTC, and WDOX. </Styled.IncludDescBody>
                      </Styled.IncludDesc>
                    </Styled.IncludItemOne>
                  </Grid>
                  <Styled.MHr />
                  <Grid xs={12} md={3} item sm={6}>
                    <Styled.IncludItemOne>
                      <Styled.IncludLogo><img src='./assets/img/verify.svg' alt="" /></Styled.IncludLogo>
                      <Styled.IncludDesc>
                        <Styled.IncludDescHead>Verification</Styled.IncludDescHead>
                        <Styled.IncludDescBody>Unknown, and existing, projects prove their bonafides to WDOX DAO; we encrypt their data and store it off-chain. If a project “rugs” or fails to deliver, the DAO decides how to hold them accountable.</Styled.IncludDescBody>
                      </Styled.IncludDesc>
                    </Styled.IncludItemOne>
                  </Grid>
                </Styled.Including>
                <Styled.Including xs={12} container item>
                  <Styled.MHr />

                  <Grid xs={12} md={3} item sm={6}>
                    <Styled.IncludItemOne>
                      <Styled.IncludLogo><img src='./assets/img/staking.svg' alt="" /></Styled.IncludLogo>
                      <Styled.IncludDesc>
                        <Styled.IncludDescHead>Staking</Styled.IncludDescHead>
                        <Styled.IncludDescBody>Staking of the vWDOX token will be available immediately. WDOX Tokens locked for voting will be reissued as vWDOX Tokens, which
                          can be staked for WETH. </Styled.IncludDescBody>
                      </Styled.IncludDesc>
                    </Styled.IncludItemOne>
                  </Grid>
                  <Styled.MHr />

                  <Grid xs={12} md={3} item sm={6}>
                    <Styled.IncludItemOne>
                      <Styled.IncludLogo><img src='./assets/img/nft.svg' alt="" /></Styled.IncludLogo>
                      <Styled.IncludDesc>
                        <Styled.IncludDescHead>NFT</Styled.IncludDescHead>
                        <Styled.IncludDescBody>The NFT is non-transferable, and is a visual representation of a project’s safety, and commitment to it’s holders. NFTs are only available to Verified Projects. Think of them like a “Security Badge.”</Styled.IncludDescBody>
                      </Styled.IncludDesc>
                    </Styled.IncludItemOne>
                  </Grid>
                </Styled.Including>
                <Styled.Including xs={12} container item>
                  <Styled.MHr />

                  <Grid xs={12} md={3} item sm={6}>
                    <Styled.IncludItemOne>
                      <Styled.IncludLogo><img src='./assets/img/dao.svg' alt="" /></Styled.IncludLogo>
                      <Styled.IncludDesc>
                        <Styled.IncludDescHead>WDOX DAO</Styled.IncludDescHead>
                        <Styled.IncludDescBody>Decentralized regulation lives and dies with the DAO. The DAO is the nerve center of the project.</Styled.IncludDescBody>
                      </Styled.IncludDesc>
                    </Styled.IncludItemOne>
                  </Grid>
                  <Styled.MHr />

                  <Grid xs={12} md={3} item sm={6}>
                    <Styled.IncludItemOne>
                      <Styled.IncludLogo><img src='./assets/img/token.svg' alt="" /></Styled.IncludLogo>
                      <Styled.IncludDesc>
                        <Styled.IncludDescHead>Governance token</Styled.IncludDescHead>
                        <Styled.IncludDescBody>WDOX Token is the governance token of the DAO. Weight is assigned based on both the amount of tokens, and the time tokens are locked for voting.</Styled.IncludDescBody>
                      </Styled.IncludDesc>
                    </Styled.IncludItemOne>
                  </Grid>
                </Styled.Including>
                <Styled.Graphic xs={0} md={12} item>
                  <img src='./assets/img/graphic.svg' alt="" />
                </Styled.Graphic>
              </Styled.First>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* Executive Summary: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title id="background">Executive Summary:</Styled.Title>
              <Styled.Desc>
                WDOX DAO is the first decentralized regulation ecosystem within Web3. It’s made up of several parts, which in total, create a platform for developers to identify themselves, and have their projects - contracts, websites, functions, etc. - verified as safe in a universally recognizable way. Think of it as a security audit; or, imagine we are gate keepers. <b>We protect developers from having their lives’ put under a microscope; or finding their identities’ floating around the Internet. All while ensuring investors that said developers are decent people, building good projects, and willing to be held accountable.</b>
              </Styled.Desc>
              <Styled.Desc>
                This document presents a case for a governance token (WDOX) to control the DAO, as well as, a case for the creation of a utility-based, non-transferable, NFT to establish verification amongst developers, project creators, and investors.
              </Styled.Desc>
              <Styled.Desc>
                In total, the WDOX platform will use known technologies in a new and intuitive way to make verifying good projects incredibly easy, and identify bad, or “sketchy” projects, even easier. It’s created with both beginners and experienced traders in mind. Its verification process, concepts of security, and/or token economics may be difficult to explain to a beginner in the space, but visually seeing the NFT verification of a new project will be simple and straight forward.
              </Styled.Desc>
              <Styled.Desc>
                The WDOX token is meant to fuel the WDOX platform, and provide weighted governance to the DAO. The DAO is the most important piece of the project; any and all decisions - whether to publicly or legally identify a project’s creators or owners, for example - will be brought to vote within the DAO. The NFT issuance, to projects that have been verified as safe, will be important in setting a new safety standard for token, NFT, or DAO investments in the future.
              </Styled.Desc>
              <Styled.Desc>
                WDOX DAO will  run a safety mint and/or a trial  buy-sell for each new project that has requested verification. This should eliminate the possibility of users getting stuck in a “honey pot” or being “rugged” outright. We will ensure that each project’s code is verified on Etherscan, and that the developers are able to be held accountable in the event they don’t honor their Roadmaps (blatantly), or outright scam their holders’. Existing projects will also be encouraged to apply for verification, as their projects will also be gone over thoroughly and assigned a “Health” status rating.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* Current status */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title>Current status</Styled.Title>
              <Styled.Desc>
                The project at this point has yet to have a token creation event. We’re building our ecosystem out, and are doing rigorous testing to ensure a smooth operating environment for the community. <b>Our token Pre-Sale is scheduled tentatively for 4/15/2022, and by whitelist only.</b> Having said that, we’re exploring opening the whitelisting opportunities up to the public. This is, after all, a community project. The project will be taken public ten-days after the Pre-Sale begins, or 24-hours after 25% of token supply has been purchased.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* Roadmap 2022 */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title>Roadmap 2022</Styled.Title>
              <Styled.StepperWrap>

                <Styled.Stepper xs={12} container item>
                  <Styled.StepTitle>Q1</Styled.StepTitle>
                  <Styled.Step>
                    <Styled.StepMark />
                    <Styled.StepStick />
                  </Styled.Step>
                  <Styled.StepDesc xs={7} md={6} item sm={6}>
                    <Styled.Desc>
                      *<b>Build out our ecosystem</b> to protect investors, collectors, and developers going forward.
                    </Styled.Desc>
                    <Styled.Desc>
                      *<b>Launch the project</b> via LaunchPad/Pre-Sale/IDO.
                    </Styled.Desc>
                  </Styled.StepDesc>
                </Styled.Stepper>

                <Styled.Stepper xs={12} container item>
                  <Styled.StepTitle>Q2</Styled.StepTitle>
                  <Styled.Step>
                    <Styled.StepMark />
                    <Styled.StepStick />
                  </Styled.Step>
                  <Styled.StepDesc xs={7} md={6} item sm={6}>
                    <Styled.Desc>
                      *<b>Ensure the community has real roots within the DAO</b>, and that votes are meeting the minimum thresholds regularly.
                    </Styled.Desc>
                    <Styled.Desc>
                      *<b>Streamline the verification procedures;</b> look for artificial intelligence systems that can help remove the human factor from verification.
                    </Styled.Desc>
                  </Styled.StepDesc>
                </Styled.Stepper>

                <Styled.Stepper xs={12} container item>
                  <Styled.StepTitle>Q3</Styled.StepTitle>
                  <Styled.Step>
                    <Styled.StepMark />
                    <Styled.StepStick />
                  </Styled.Step>
                  <Styled.StepDesc xs={7} md={6} item sm={6}>
                    <Styled.Desc>
                      *<b>Grow the community health ratings system.</b> This sort of system is designed to take advantage of network effects, and will be much more effective at scale.
                    </Styled.Desc>
                    <Styled.Desc>
                      *Hold a DAO vote on the next phase of decentralized regulation; WDEX upgrades, and WDOX Market.
                    </Styled.Desc>
                  </Styled.StepDesc>
                </Styled.Stepper>

                <Styled.Stepper xs={12} container item>
                  <Styled.StepTitle>Q4</Styled.StepTitle>
                  <Styled.Step>
                    <Styled.StepMark />
                  </Styled.Step>
                  <Styled.StepDesc xs={7} md={6} item sm={6}>
                    <Styled.Desc>
                      *<b>This quarter will largely come down to voting within the DAO.</b> We know what we’d like to do, and that’s to continue building to protect the space for years to come, but ultimately that decision lies with the DAO.
                    </Styled.Desc>
                  </Styled.StepDesc>
                </Styled.Stepper>

              </Styled.StepperWrap>
            </Styled.ItemBlock>



            {/* Background: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title>Background:</Styled.Title>
              <Styled.Desc>
                <b>The crypto space is full of projects that are downright dangerous. It’s become a toxic space, and that’s unfortunate when the potential for real change is considered. The space has become synonymous with scams. We use phrases like “rug pull” and “honey pot” way too often, and this inhibits main stream adoption.</b>
              </Styled.Desc>
              <Styled.Desc>
                The same holds true for the NFT space. Developers are hired or outsourced from freelance sites, and scams emerge. Often, a project born in good faith is left to die when the team behind it earns untold amounts of money after minting out, and then they continue to pull in royalties from secondary sales. In the current space, scammers are almost incentivized to lead mass marketing campaigns, hire a developer, an artist, and launch a project. If the project does well, and volume is high on secondary marketplaces, then the project should feel compelled to deliver on their “Roadmap.” Having said that, it’s become irrelevant to 90% of the project leaders in the space. If the project does poorly, or is announced a scam, the developers of said project still reap the secondary sales royalties, and sometimes with even greater volume, as people try to escape its downward spiral.
              </Styled.Desc>

              <Styled.Desc>
                This is plaguing our space. The creation of NFTs, and even crypto tokens, has become plug-and-play easy. Project leaders do not need a single scrap of blockchain experience or frontend development skill; so long as they have the ability to finance the project’s creation, they stand to make millions of dollars.
              </Styled.Desc>

              <Styled.Desc>
                The expression many use within the crypto space is “Wild West”, and in a sense, we are all correct. This space is largely unregulated, and will be for some time to come. Most of us, especially those that have been around for a while are believers in a free market, financial freedom, or the right to privacy. We believe that in order for NFTs - utility and art based - to becomes mainstream, for crypto-currencies to catch fiat in a real way, for innovation within the entire sphere to help fix the problems that exist - we need real regulation, and we need it to come from within.
              </Styled.Desc>

              <Styled.Desc>
                Regulation <b>will</b> come from world governments. They will over-regulate, and stifle innovation. It’s not a matter of what, but of when. They will hire so-called experts, and those experts will make things incredibly difficult for new projects, novel ideas, or revolutionary breakthroughs to happen. This is a space built on decentralization, and this needs to continue in order for it to be sustainable. Regulating through identity disclosure, and fear of public and/or legal reprisal is one of the best ways for our space to regulate itself. The trouble is, until now, that’s a relatively dangerous and/or nerve wracking task.
              </Styled.Desc>

              <Styled.Desc>
                All too often project developers simply do not want to document their identity. The reasons vary, but something as simple as working for a major technology company, or being known in the space from another project - whether successful or not - could hold back a project, and therefore, slow innovation. Developers could come from a privacy background, or could have watched first hand how easy it can be to have their identities stolen, or their lives flipped upside down. A hypothetical, real-life Satoshi Nakamoto wouldn’t be able to buy a gallon of milk without being stalked and harassed endlessly. Vitalik Buterin is an international celebrity. Sergei Nazarov is a celebrity within the crypto space, and has thousands of “Marines” hanging on his every word. Developers of large, successful projects will always have incentive to publicly identify themselves. This is especially true when it becomes their primary source of income. Not so for the risk on projects that could, on one hand, fail miserably. Or, on the other hand, they could change finance, leasing, ticketing, etc. as we know it.
                Today, those of us in this space hear, or read, “un-doxxed team” and we try to convince ourselves that it’s going to be okay. We do our diligence, and we think... “well, SHIBA was created anonymously; Bitcoin was created anonymously; Bored Ape Yacht Club was created anonymously”... but in reality, we are terrified. Most of us are already psychologically out of the project before its begun. It’s just become too risky in a space full of scams.
              </Styled.Desc>

              <Styled.Desc>
                We are a core team of seven, from all across the world; spread over four continents, and 5 timezones. When I put the project together, I was looking for a specific set of qualities amongst all new hires. I wanted the new hires to become team members, not employees. I wanted them all to believe in the possibility that a single project could help clean up Web3. We’ve all, at some point or another, been the victim of an outright scam, a “slow-rug” scam, a “honey pot”, or even a complete wallet wipe-out scam. It has to stop. There has to be some barrier to entry, and it has to be done in a way that’s not going to stifle innovation, or keep otherwise great developers from building within Web3. Make no mistake, Web3 - NFTs, crypto, DAOs - are the future of the global financial system, and finance is only one of countless industries that will be revolutionized by the blockchain. We believe that in order for this to happen, we need to regulate the space from within. Government over-regulation is hardly conducive to innovation.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* WDOX Environment: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title id="environment">WDOX Environment:</Styled.Title>
              <Styled.Desc>
                Today, the space we exist in is comprised of mainly three groups. At the heart of the space we have the developers; those that create the smart contracts, that build out user interfaces, that enable the general public to use Web3 assets. Then, we have the investors; those that finance projects, or speculate on a revolutionary idea. Finally, we have the users; the NFT minters, the retail investors, the art collectors. So very often, a single individual will wear all three of these hats before understanding what many before her figured out the same way: crypto is dangerous, and unlikely to expand into the wider populace without some cleaning up.
              </Styled.Desc>

              <Styled.Desc>
                We’ve tackled this problem from the perspective of the three main roles within the environment. Almost all of the core team here have worn at least two of the three hats, and we uniquely understand the issues facing each. The intention here is to illustrate what our project means to each of them, individually, and how that will effect the collective.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* Developer: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.SubDesc>Developer:</Styled.SubDesc>

              <Styled.Desc>
                Developers will want their project to shine on its merits, but around here, things usually fail to gain traction, or come under severe scrutiny, without the developer themselves being known. Developers will avoid creating the project they have in mind for fear of public rejection; for fear of losing their actual jobs, if they’re discovered; for fear of having their everyday lives - actually, and online - transformed forever.
              </Styled.Desc>

              <Styled.Desc>
                We’ve created a very simple, but non-fungible, way for developers and teams to share their identity, and without sharing it with the general public. We will allow developers to connect with our project over an encrypted communication layer, fill out our application form, upload their documents to our verification team - automated in the near future to eliminate human bias, but human as of now - and answer any questions our team may have to be certain they are who they say they are. The developers and project creators’ documents will be encrypted, stored off-chain, and forgotten about. This will earn the project a “badge” - internal - showing that the developers are known to our project, and their identities are real, and stored with us. This is the first part of the project from a developer’s viewpoint.
              </Styled.Desc>

              <Styled.Desc>
                We will then ask the project to submit their contract and front-end interface to our project for a security review. We will audit the project’s code, and we will issue another “badge” stating that the projects’ code is secure and safe. We will store the projects’ wallet/s, the developers’ identities, and a copy of the contract, as well. During this stage, the developers applying for verification will generate an encryption key. <b>This data is all encrypted, and stored off-chain.</b> The only way it’s accessible is through the DAO vote.
              </Styled.Desc>

              <Styled.Desc>
                Lastly, our team will attempt to mint the project’s NFT, buy/sell their token, or have a look into their DAO’s financial plans. We will check the multi-sig wallets, and look for anything that’s out of the ordinary. Once all of the above are accounted for, and proven safe - the process could take anywhere from an hour to a few days, depending - the project moves on the the next stage.
                This is the final stage of verification for any project. The project will be able to mint an NFT unique to their project, and our verification. This NFT can, and should be, posted to the project’s website, socials, and shared with exchanges and marketplaces. This NFT will be similar to a QR-Code, in that you will be able to scan the NFT to verify it’s authenticity with our project, and on the blockchain. The NFT must be minted using the verified project’s wallet, and will be a non-transferable. When the project is fully verified, the developers will generate an encryption key. This key will stay stored in a separate location, and is only accessible through a “Yes” DAO vote to one very specific proposal.
              </Styled.Desc>
            </Styled.ItemBlock>
            <Styled.Hr />

            {/* Investor: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.SubDesc>Investor:</Styled.SubDesc>
              <Styled.Desc>
                Investors will use WDOX as their first method of due diligence. They will be able to safely invest in new and upcoming crypto and/or NFT projects without the fear they’re donating their money to a scammer, or some nefarious group. This will almost certainly give rise to a number of new financial projects that will continue to shape our space in the years to come. This will also help developers find funding for projects not really mainstream - to crypto, respectively. Investors will have a real and tangible way to know that the project’s builders’ are in fact known to our project, and if the DAO vote were passed, those identities could be turned over to the community and/or the authorities if the project scams its investors. It gives the investor peace of mind, while keeping everyone anonymous until they wish to share their identity.
              </Styled.Desc>

              <Styled.Desc>
                The second piece of the puzzle for the investor is voting control within the DAO. Investor’s will be able to vote on WDOX DAO proposals. This essentially gives them the ability to help build a Web3 future through funding, and be involved in regulating it. It keeps them up to date with verified projects, and ensures that they’re in knowledgable positions within the space.
                Aside from verification, investors will be able to view any projects’ “Health” status bar on our website. It will give the investor a good idea of where the project stands with its own community, and with other investors. It will let the investor know if something major has changed or happened within the project that could alter its trajectory. It’s an important feature to consider, and one we’re excited to implement.
              </Styled.Desc>

              <Styled.Desc>
                The use case for an investor is quite simple. He/She can scan the NFT of ‘X” project to ensure that it’s been verified through us, or they can visit the WDOX website to check if said project is stored in our verified database. Finally, he/she could always check the investment project’s wallet to be absolutely sure they’re verified; the WDOX DAO NFT will be there, or it will not.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* User: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.SubDesc>User:</Styled.SubDesc>
              <Styled.Desc>
                This is the group hurt the most by scams, and perhaps the role that benefits most from regulation. The fact is, without a massive user base, most projects will fail, or will “cut and run”. It’s simple. We want mainstream users to know they are investing, or minting, a real project. It will help beginners stick around long enough to become experienced traders, and maybe change the space.
              </Styled.Desc>

              <Styled.Desc>
                It’s incredibly easy for a beginner to verify a project is safe. They simply scan the project’s NFT issued after we verify that project. Or, they can use our website to search for the potential investments’ verification; maybe they decide to check the project wallet on Etherscan, to make sure that project holds our NFT. This will make investing in new projects easier for the masses, and certainly make it easier to test concepts that could shape the world, and in a safe and honest way.
              </Styled.Desc>

              <Styled.Desc>
                The everyday user, professional or beginner, will also have a massive role in regulating the space moving forward. This group of people are the life blood of Web3. We’re going to create a “Health” status bar for most NFT, crypto, or DAO projects - verified through us or not. This “Health” status will give the users a rough idea, at a glance, if the project they’re interested in is trusted by the community. This will also incentivize projects to take a look at where their trust level between their holders/investors, and themselves really lies. A project that is verified through WDOX DAO, and consistently has high “Health” status ratings is almost certainly a safer, or more sound, project than one without either of those.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock xs={12} container item>
              <Styled.PageTitle id="WDOX">$WDOX Token</Styled.PageTitle>

              {/* Utility */}
              <Styled.Title>Utility</Styled.Title>
              <Styled.Desc>
                The WDOX token is the governance token for the DAO. We’ve based voting weight not only on the amount of tokens held, but on the amount of time those tokens are locked up. The time lock periods vary; <b>1-week, 2-weeks, 1-month, 3-months, 6-months, 1-year, and 2-years.</b> The more tokens to you have, and the longer those tokens are locked up, the larger your share of the vote - measured in sWDOX. This is also the amount of sWDOX tokens you will recieve when locking your WDOX token. Like other gauge weighted tokens, the voting weight will decrease linearly over time.
              </Styled.Desc>

              <Styled.Desc>
                The token is not meant to be speculative, but we imagine it will be at some point. We’re going to implement a “vesting period” for all Pre-Sale tokens to help avoid wild price action early on. We will also have a maximum buy, and a maximum amount per wallet, limit. There is a minimum of WDOX tokens to be locked for DAO voting, and sWDOX staking, as well. See details below.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />


            {/* Token Distribution */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title>Token Distribution</Styled.Title>
              <Styled.Desc>
                The total amount of tokens to be minted is 3,000,000,000; it’s a fixed amount, with zero risk of inflation over time.
              </Styled.Desc>

              <Styled.ChartWrap xs={12} container item>
                <Styled.Chart xs={12} md={4} item sm={12}>
                  <img src='./assets/img/chart.svg' alt="" />
                </Styled.Chart>
                <Styled.ChartDesc xs={12} md={8} item sm={12}>
                  <Styled.ChartDescItem container>
                    <Styled.ChartPart1 />
                    <Styled.ChartPartName>Community Liquidity Providers = 1,200,000,000 (40%)</Styled.ChartPartName>
                  </Styled.ChartDescItem>

                  <Styled.ChartDescItem container>
                    <Styled.ChartPart2 />
                    <Styled.ChartPartName>Pre-Sale Liquidity Providers = 750,000,000 (25%)</Styled.ChartPartName>
                  </Styled.ChartDescItem>

                  <Styled.ChartDescItem container>
                    <Styled.ChartPart3 />
                    <Styled.ChartPartName>Core Team = 750,000,000 (25%)</Styled.ChartPartName>
                  </Styled.ChartDescItem>

                  <Styled.ChartDescItem container>
                    <Styled.ChartPart4 />
                    <Styled.ChartPartName>Reserve Holdings / Treasury = 150,000,000 (5%)</Styled.ChartPartName>
                  </Styled.ChartDescItem>

                  <Styled.ChartDescItem container>
                    <Styled.ChartPart5 />
                    <Styled.ChartPartName>Long-Term Compensation = 150,000,000 (5%)</Styled.ChartPartName>
                  </Styled.ChartDescItem>

                </Styled.ChartDesc>
              </Styled.ChartWrap>

            </Styled.ItemBlock>

            <Styled.Hr />

            {/* Vesting & Limits: */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.Title>Vesting & Limits:</Styled.Title>
              <Styled.SubDesc>Vesting</Styled.SubDesc>
              <Styled.Desc>
                • Pre-Sale Liquidity Providers = 30-day vesting period
              </Styled.Desc>
              <Styled.Desc>
                • Core Team = 30-day vesting period
              </Styled.Desc>

              <Styled.SubDesc>Limits</Styled.SubDesc>
              <Styled.Desc>
                • Maximum Buy = 0.5% of total supply, or 15,000,000 tokens
              </Styled.Desc>
              <Styled.Desc>
                • Maximum Amount per Wallet = 1.25% of total supply, or 37,500,000 tokens
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* Token Release Schedule */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.SubDesc>Token Release Schedule:</Styled.SubDesc>
              <Styled.Desc>
                <b>Initial token release will be 1,650,000,000 on 04/15/2022; the details follow. (Date Subject to Change)</b>
              </Styled.Desc>
              <Styled.Desc>
                • Pre-Sale LPs = 750,000,000
              </Styled.Desc>
              <Styled.Desc>
                • Core Team = 750,000,000
              </Styled.Desc>
              <Styled.Desc>
                • Reserve Holdings / Treasury = 150,000,000
              </Styled.Desc>
              <Styled.Desc>
                <b>Public token release will be 1,350,000,000 on 04/25/2022. (Date Subject to Change)</b>
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock xs={12} container item>
              <Styled.SubDesc>Staking:</Styled.SubDesc>
              <Styled.Desc>
                The $WDOX token can be locked to enable DAO voting. Locked WDOX tokens will give you both a weighted DAO vote, and return to you sWDOX tokens according to the amount of time those tokens are locked. Tokens locked the maximum amount of time (2-years) will get 1-1 exchange; tokens locked for (1-year) will get .5-1; tokens locked (6-months) will get .25-1; etc.
              </Styled.Desc>
              <Styled.Desc>
                <b>The minimum amount of tokens to lock is 3,000 WDOX tokens; earning the wallet weighted vote, and sWDOX tokens to stake.</b> <br />
                The $sWDOX tokens can be staked to earn WETH trading fees.
              </Styled.Desc>
              <Styled.Desc>
                • Technical Documentation for $WDOX is below.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            {/* $WDOX - Technicals */}
            <Styled.ItemBlock xs={12} container item>
              <Styled.PageTitle> $WDOX - Technicals</Styled.PageTitle>
              <Styled.Title id="introducing">Amount/Time Locked - Weighted Voting/Staking</Styled.Title>
              <Styled.DescUl>
                The most effective form of voting weight we’ve researched has been the time-weighted voting model. It’s not used by many, but that’s because it’s a little more difficult to implement. So, instead of voting with just the amount “X”, WDOX tokens are locked up to vote according to the following: <br />
              </Styled.DescUl>
              <Styled.Formular>:<i><b> Y<sub>l</sub> , where Y<sub>l</sub> &lt; Y<sub>max</sub>=2-years.</b></i></Styled.Formular>
              <Styled.DescUl>
                Once locked, the amount of time left until the tokens are unlocked is <Styled.Formular1><i><b>Y &le; Y<sub>l</sub></b></i></Styled.Formular1>.</Styled.DescUl>

              <Styled.DescUl>
                The voting weight is equal to:
              </Styled.DescUl>
              <Styled.Formular2>z = x <Styled.Fraction>y <Styled.FractionHr /> ymax</Styled.Fraction>.</Styled.Formular2>

              <Styled.Desc>
                Where z=voting weight; x=amount locked; y=time locked; and max=2-years.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock xs={12} container item>
              <Styled.SubTitle>Voting:</Styled.SubTitle>

              <Styled.Desc>
                The amount of tokens held is no longer the only variable in voting.
              </Styled.Desc>

              <Styled.Desc>
                By using the amount of tokens, and the time those tokens are locked, we’re incentivizing participation in the DAO process.
              </Styled.Desc>

              <Styled.Desc>
                It should be noted that the voting power, measured in <b>vWDOX</b>, will decrease linearly over time.
              </Styled.Desc>

              <Styled.DescUl>
                An example:
              </Styled.DescUl>

              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 2-years earns 1 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 1-year earns 0.5 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 6-months earns 0.25 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 3-months earns 0.125 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 1-month earns 0.04125 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 2-weeks earns 0.020625 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 1-week earns 0.0103125 vWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescFirst>
                Voting weight within the DAO is represented as <b>vWDOX</b>. Please remember, this is not an actual token. It’s a representation of the voting weight connected to any one wallet. It’s an idea, and only applicable within the DAO.
              </Styled.DescFirst>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock xs={12} container item>
              <Styled.SubTitle>Staking:</Styled.SubTitle>

              <Styled.Desc>
                The same formula applies to our staking. When a WDOX token is locked up for voting, an sWDOX token is minted according to the amount/time formula we’ve detailed above.
                To make things simpler.
              </Styled.Desc>

              <Styled.DescUl>
                An example of token staking:
              </Styled.DescUl>

              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 2-years mints 1 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 1-year mints 0.5 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 6-months mints 0.25 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 3-months mints 0.125 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 1-month mints 0.04125 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 2-weeks mints 0.020625 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • 1 WDOX locked for 1-week mints 0.0103125 sWDOX.
                </b>
              </Styled.DescUl>
              <Styled.DescFirst>
                Staking rewards are claimed in WETH so as to avoid large, frequent dumps of the governance token. We’ve created this model to effectively leave WDOX alone. The token exists for governance, and the concept of the project is to protect the community through participation in the DAO; this is a great incentive for the community.
              </Styled.DescFirst>
              <Styled.Desc>
                This is intended to keep the voting weights fair, and to share the trading fees with the community. At this point, there is a 50% Administration Fee on all trades. This is going to go to a vote within the DAO at some point in the near future. The Admin Fees will start growing in the treasury for future acquisitions, new builds, or planned scaling of the environment.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.Title id="dao"> DAO</Styled.Title>
              <Styled.SubTitle>Introduction</Styled.SubTitle>
              <Styled.Desc>
                WDOX DAO exists to keep the developers, and their projects, safe from public scrutiny and/or harassment. More importantly, it exists to keep the public safe from bad actors within Web3. The purpose of the DAO is to govern the project, and its decisions. This is too much power for any one person, or even a small group, for that matter. This project is most effective if it’s being governed by the individuals within the Web3 community. This does not mean that only experienced traders, or “blue-chip” NFT holders will be included; everyone locking their WDOX tokens will have an equal chance to be heard. We are, after all, assigning voting weight based on total tokens held, and the amount of time those tokens are locked up. Voting weight will be represented within the DAO as vWDOX.
              </Styled.Desc>

              <Styled.SubTitle>Proposals</Styled.SubTitle>
              <Styled.Desc>
                Anyone can put forward a proposal. The voting towards that proposal can only be done by those with locked $WDOX tokens.
              </Styled.Desc>
              <Styled.Desc>
                <b>
                  Votes Needed to Pass a Measure:
                </b>
              </Styled.Desc>
              <Styled.DescUl>
                • 30% of the DAO must be active during any one vote.
              </Styled.DescUl>
              <Styled.DescUl>
                • 51% of the vote must be reached before any “Yes” or “No” votes can be decided.
              </Styled.DescUl>
              <Styled.DescUl>
                • In the event there is ever a vote with an exact “Yes” / “No” distribution (50-50 vote); a second vote will be held with the same proposal; then a third, fourth, ad infinitum... until a decision is reached.
              </Styled.DescUl>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.Title id="nft">NFT</Styled.Title>
              <Styled.Desc>
                The NFT is a non-transferable token to signify a projects’ verification through WDOX. It will not be available publicly. It will be minted on a one by one basis. It must be minted by the verified project’s main wallet. It will be similar to a QR-Code in that it can be scanned for immediate assurance of safety or accountability for that specific project.
              </Styled.Desc>
              <Styled.Desc>
                The visual design of the NFT will vary according to the project applying for verification, but will coincide with the logo or design elements for that project.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.Title id="dex">DEX</Styled.Title>
              <Styled.Desc>
                The DEX is being created to give the community a low-fee option for swapping their $WDOX tokens. We are going to use the fees generated from verification to inject liquidity into our own pair pools, and thereby lower slippage, reducing the swap costs. The fees generated from developers / projects requesting verification from WDOX will be paid to WDOX DAO in any of the following tokens:
              </Styled.Desc>
              <Styled.DescUl>
                <b>
                  • $USDT
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • $USDC
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • $DAI
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • $UST
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • $ETH
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • $WBTC
                </b>
              </Styled.DescUl>
              <Styled.DescUl>
                <b>
                  • $WDOX
                </b>(Using the native token to pay the fee will provide the developers with a more affordable solution.)
              </Styled.DescUl>
              <Styled.DescFirst>
                The fee itself will vary depending on the scope of the project requesting verification, as will the time required to complete that verification. We will absolutely take into account deadlines and emergencies; getting safe projects to the community is absolutely our number one priority.
              </Styled.DescFirst>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.Title id="team">Core Team Members</Styled.Title>
              <Styled.Title id="introducing">The entire concept of our project is safety, anonymity, and accountability. </Styled.Title>
              <Styled.Desc>
                As a team, we will remain anonymous to the community until after the DAO has taken full control of the voting process. Some of us may remain anonymous even then. Our wallets will be public; the project wallets will be public.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.Desc>
                The amount of targeted negativity directed at some of us has been pretty intense, and others here have worked on other projects. This is our decision, and we’re sticking to it. We will host AMAs and Twitter Spaces events. We will be active in the Discord, and our Twitter accounts will be public. We just don’t want our actual lives or our identities put into the light. We have several legal opinions for the project. We have our Howey test requirements. We’ve built this project to provide a sense of safety and privacy to developers and investor’s, respectively. We deserve the same privacy.
              </Styled.Desc>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.DescShortB>
                Genesis - Founder; N.Y., USA - <b>Security Researcher</b>
              </Styled.DescShortB>

              <Styled.DescShortB>
                Adeshina - Backend Developer; Lagos, Nigeria - <b>Developer</b>
              </Styled.DescShortB>

              <Styled.DescShortB>
                Vadim - Frontend Developer; Belgrade, Serbia - <b>Developer</b>
              </Styled.DescShortB>

              <Styled.DescShortB>
                StackTooDeep - Lead Developer; Dubai, U.A.E. - <b>Developer</b>
              </Styled.DescShortB>

              <Styled.DescShortB>
                Anya - Lead Designer; Biysk, Russia - <b>Designer</b>
              </Styled.DescShortB>

              <Styled.DescShortB>
                Taiwo Dada - SMM, UX Designer; Lagos, Nigeria - <b>UX Designer</b>
              </Styled.DescShortB>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock  >
              <Styled.Title id="links">Links</Styled.Title>
              <Styled.Links xs={12} container className='links' item>
                <Styled.LinkItem>
                  <a href='https://twitter.com/WDOXDAO' >
                    <img src='./assets/img/links/twitter.svg' alt="" />
                  </a>
                </Styled.LinkItem>
                <Styled.LinkItem>
                  <a href='https://discord.gg/ezhnnHrhgy'>
                    <img src='./assets/img/links/discord.svg' alt="" />
                  </a>
                </Styled.LinkItem>
                <Styled.LinkItem>
                  <a href='https://github.com/stackTooDeep/WDOX-CONTRACTS'>
                    <img src='./assets/img/links/github.svg' alt="" />
                  </a>
                </Styled.LinkItem>
                <Styled.LinkItem>
                  <a href='https://t.me/+-J1nRB7QZn84ZjVh'>
                    <img src='./assets/img/links/telegram.svg' alt="" />
                  </a>
                </Styled.LinkItem>
                <Styled.LinkItem>
                  <a href='https://wdoxdao.medium.com/'>
                    <img src='./assets/img/links/medium.svg' alt="" />
                  </a>
                </Styled.LinkItem>
              </Styled.Links>
            </Styled.ItemBlock>

            <Styled.Hr />

            <Styled.ItemBlock container>
              <Grid xs={12} container item>
                <Styled.Footer xs={12} md={5} container item>
                  <Grid container>
                    <Styled.Megaphone>
                      <Styled.MegaIcon src='./assets/img/links/megaphone.svg' alt="" />
                    </Styled.Megaphone>
                    <Styled.FooterTitle>Website:</Styled.FooterTitle>
                  </Grid>
                  <Styled.FooterContent>
                    <Styled.FooterBody> www.wdoxdao.com (Coming Soon) </Styled.FooterBody>
                  </Styled.FooterContent>
                </Styled.Footer>

                <Styled.Footer xs={12} md={5} container item>
                  <Grid container>
                    <Styled.Megaphone>
                      <Styled.MegaIcon src='./assets/img/links/megaphone.svg' alt="" />
                    </Styled.Megaphone>
                    <Styled.FooterTitle>App: </Styled.FooterTitle>
                  </Grid>
                  <Styled.FooterContent>
                    <Styled.FooterBody>www.wdoxdao.app (Coming Soon) </Styled.FooterBody>
                  </Styled.FooterContent>
                </Styled.Footer>
              </Grid>
            </Styled.ItemBlock>

          </Styled.PaperBox>
        </Styled.PaperMain>
      </Styled.PaperWrap>
    </Box >
  );
};

export default Sidebar;