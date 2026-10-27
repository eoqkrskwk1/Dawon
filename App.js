/* eslint-disable */
import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  return (
    
      <div className="App">
        {/*상단 메뉴 영역*/}
        <header className="topbar">
          <div className="wrap nav">
            <a href="#mainPage" className="brand">
              <img src="다원_logo.png" width="60"  alt="다원행사기획"/> 
              <strong>다원행사기획</strong>
            </a>
            <nav className="menu">
              <a href="#service">사업안내</a>
              <a href="#portfolio">포트폴리오</a>
              <a href="#inquiry">행사문의</a>
              <a href="#footer">회사정보</a>
            </nav>
          </div>
        </header>

        {/*메인 이미지*/}
        <div id="mainPage" className="performance">
          <br/> <br/> <br/><br/>
          <h1>기업행사·축제·공연 행사기획 전문<br/>다원행사기획</h1> <br/><br/>
          <p>현장 경험과 전문적인 기획력으로<br/>고객의 행사를 완성도 높은 순간으로 만들어드립니다.</p>
        </div>


          {/*실시간상담*/}
          <div className="quick">
            <button onClick={() => window.open('http://kr07.tocplus007.com/toc.do?userId=rlatngk98', 'tocplusChat', 'width=300,height=270,scrollbars=yes')}>
                상담<br/><small>실시간 상담</small>
            </button>
          </div>
        
        {/*서비스 영역*/}
         <section id="service" className="section reveal show">
          <div className="wrap">
            <div className="title">
              <div className="eyebrow">OUR SERVICE</div>
              <h2>다원행사기획의 전문 서비스</h2>
              <div className="bar"></div>
            </div> 
          </div>
          <div className="services">
          <article className="service">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="기업행사 및 축제 행사기획 서비스" loading="lazy"/>
            <div className="txt">
              <div className="mark">01</div>
                <h3>행사 기획</h3>
                <p>축제, 기업행사, 개막식 등 <br/> 목적과 성격에 맞춘 <br/> 맞춤형 기획을 제공합니다.</p>
            </div>
          </article>

         <article className="service">
            <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="공연 무대 연출 및 행사 무대 디자인" loading="lazy"/>
            <div className="txt">
              <div className="mark">02</div>
                <h3>무대 &amp; 연출</h3>
                <p>전문적인 무대 디자인과 <br/> 연출로 행사의 집중도와 <br/> 완성도를 높입니다.</p>
            </div>
          </article>

          <article className="service">
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="음향 조명 LED 영상 행사 장비 시스템" loading="lazy"/>
            <div className="txt">
              <div className="mark">03</div>
                <h3>장비 &amp; 시스템</h3>
                <p>음향, 조명, LED, <br/> 영상 시스템을 현장에 맞게 <br/> 구성합니다.</p>
              </div>
            </article>

            <article className="service">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="행사 운영 및 현장 진행 관리" loading="lazy"/>
              <div className="txt">
                <div className="mark">04</div>
                <h3>운영 &amp; 진행</h3>
                <p>현장 운영 인력과 <br/> 진행 관리로 안정적인 <br/> 행사 운영을 약속드립니다.</p>
              </div>
            </article>

             <article className="service">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="행사 홍보 마케팅 및 현장 프로모션" loading="lazy"/>
              <div className="txt">
                <div className="mark">05</div>
                <h3>홍보 &amp; 마케팅</h3>
                <p>행사의 가치를 높이는 <br/> 홍보 전략과 현장 프로모션을 <br/> 지원합니다.</p>
              </div>
            </article>
            </div>
          </section>
        
        {/*포트폴리오 영역*/}
        <section id="portfolio" className="section portfolio reveal show">
          <div className="wrap">
            <div className="title">
              <div className="eyebrow">PORTFOLIO</div>
              <h2>주요 행사 포트폴리오</h2>
              <div className="bar"></div>
            </div>
          </div>
        <div className="port-grid">
            <div className="port">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="기업 체육대회 행사대행 포트폴리오" loading="lazy"/>
              <span>기업 체육대회</span>
            </div>
             <div className="port">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="시상식 컨퍼런스 행사기획 포트폴리오" loading="lazy"/>
              <span>시상식 &amp; 컨퍼런스</span>
            </div>
            <div className="port">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="지역 축제 행사기획 포트폴리오" loading="lazy"/>
              <span>지역 축제</span>
            </div>
            <div className="port">
              <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="공연 콘서트 행사대행 포트폴리오" loading="lazy"/>
              <span>공연 &amp; 콘서트</span>
            </div>
            <div className="port">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="워크숍 세미나 행사운영 포트폴리오" loading="lazy"/>
              <span>워크숍 &amp; 세미나</span>
            </div>
            <div className="port">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="전시 프로모션 행사기획 포트폴리오" loading="lazy"/>
            <span>전시 &amp; 프로모션</span>
          </div>
        </div>
      </section>

      {/*문의 영역*/}
      <section id="inquiry" className="section inquiry reveal show">
        <div className="wrap inq-grid">
          <div className="info">
            <div className="eyebrow">EVENT INQUIRY</div>
            <h2>행사 문의</h2>
            <p>행사 목적, 일정, 장소, 예상 인원, 필요한 장비와 <br/> 운영 범위를 남겨주시면 확인 후 안내드리겠습니다.</p>
            <div className="info-list">
              <div className="info-item">
                <div className="ico">이메일</div>
                <div>
                  <span>choi13524@nate.com</span>
                </div>
              </div>
              <br/>
              <div className="info-item">
                <div className="ico">주소</div>
                <div>
                  <span>강원특별자치도 춘천시 우두1길 70 104동 1501호</span>
                </div>
              </div>
              <br/>
              <div className="info-item">
                <div className="ico">상담<br/>시간</div>
                <div>
                  <span>평일 09:00 ~ 18:00</span>
                </div>
              </div>
            </div>
          </div>
          <form className="form" id="inquiryForm">
            <input required="" name="company" placeholder="회사명 / 단체명"/>
            <input required="" name="manager" placeholder="담당자명"/>
            <input name="email" placeholder="이메일"/>
            <input name="date" placeholder="행사일자" type="date"/>
            <input name="place" placeholder="행사장소"/>
            <select name="category">
              <option value="">행사 유형 선택</option>
              <option>기업행사</option>
              <option>지역축제</option>
              <option>공연/콘서트</option>
              <option>워크숍/세미나</option>
              <option>전시/프로모션</option>
            </select>
            <textarea required="" name="content" placeholder="예시) 9월 중순 기업 워크숍을 준비 중입니다. 참석 인원은 약 120명이며, 무대 설치, 음향, 조명, 사회자 섭외, 행사 진행 인력까지 포함한 견적을 받고 싶습니다. 행사 목적, 예상 인원, 장소, 필요한 장비와 요청사항을 자세히 적어주세요."></textarea>
            <label className="agree">
              <input type="checkbox" required=""/>
              <span>개인정보 수집 및 이용에 동의합니다.</span>
              
            </label>
            <button className="submit">문의하기</button>
          </form>
        </div>
      </section>

      {/*기업정보 영역*/}
      <footer id="footer" className="footer">
        <div className="wrap">
          <div className="foot-grid no-stats">
            <div>
              <h3>다원행사 기획</h3>
              <p>다양한 경험과 전문적인 기획력으로 고객의 가치를 <br/> 최고의 순간으로 만들어드립니다.</p>
            </div>
            <div>
              <h3>사업자 정보</h3>
              <ul>
                <li>상호 : 다원행사기획</li>
                <li>대표자 : 이재철</li>
                <li>사업자등록번호 : 405-10-54957</li>
                <li>개업연월일 : 2023년 07월 10일</li>
                <li>업태 : 서비스업</li>
                <li>종목 : 기타행사기획 및 대행업</li>
              </ul>
            </div>
            <div>
              <h3>사업장 정보</h3>
              <ul>
                <li>강원특별자치도 춘천시 우두1길 70-0 104동 1501호</li>
                <li>이메일 : choi13524@nate.com</li>
              </ul>
            </div>
          </div>
          <div className="copy">© 2024 다원행사기획. All rights reserved.　　개인정보처리방침　|　이용약관</div>
        </div>
      </footer>
    </div>


  );
}

export default App;
