/* ═══════════════ SHARED DATA FILE ═══════════════ */
/* Include this file in all HTML pages: <script src="data.js"></script> */

/* ═══ VERSES ═══ */
const VERSES=[
  {t:'"The Lord is my shepherd; I shall not want."',r:'— Psalm 23:1 (ESV)'},
  {t:'"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil."',r:'— Jeremiah 29:11 (ESV)'},
  {t:'"I can do all things through him who strengthens me."',r:'— Philippians 4:13 (ESV)'},
  {t:'"Trust in the Lord with all your heart, and do not lean on your own understanding."',r:'— Proverbs 3:5 (ESV)'},
  {t:'"Therefore do not worry about tomorrow, for tomorrow will worry about itself."',r:'— Matthew 6:34 (NIV)'},
  {t:'"May the God of hope fill you with all joy and peace in believing."',r:'— Romans 15:13 (ESV)'},
  {t:'"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',r:'— Joshua 1:9 (NIV)'},
  {t:'"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."',r:'— Isaiah 41:10 (NIV)'},
  {t:'"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."',r:'— Romans 8:28 (NIV)'},
  {t:'"God is our refuge and strength, an ever-present help in trouble."',r:'— Psalm 46:1 (NIV)'},
  {t:'"The Lord is close to the brokenhearted and saves those who are crushed in spirit."',r:'— Psalm 34:18 (NIV)'},
  {t:'"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."',r:'— Isaiah 40:31 (NIV)'},
  {t:'"He heals the brokenhearted and binds up their wounds."',r:'— Psalm 147:3 (NIV)'},
  {t:'"The name of the Lord is a fortified tower; the righteous run to it and are safe."',r:'— Proverbs 18:10 (NIV)'},
  {t:'"Peace I leave with you; my peace I give you. I do not give to you as the world gives."',r:'— John 14:27 (NIV)'},
];

/* ═══ EVENTS ═══ */
const EVENTS=[
  {id:1,cat:'worship',day:'SUN',mo:'WEEKLY',bg:'linear-gradient(145deg,#5C1010,#3E0A0A)',icon:'fa-church',img:'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop',title:'Sunday Worship & Healing Service',desc:'Weekly worship, teaching & healing prayer for the whole family.',time:'9:00 AM',loc:'Johnsonville Community',badge:'Weekly',badgeClass:'badge-gold',reg:true,verse:'"The Lord is my shepherd; I shall not want." — Psalm 23:1'},
  {id:2,cat:'prayer',day:'28',mo:'MAY',bg:'linear-gradient(145deg,#3E0A0A,#200505)',icon:'fa-hands-praying',img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',title:'All-Night Prayer & Deliverance Vigil',desc:'Night of intercession, fasting & corporate prayer for breakthrough.',time:'10:00 PM',loc:'ZHDMI Center, Johnsonville',badge:'This Month',badgeClass:'badge-crimson',reg:true,verse:'"Watch and pray so that you will not fall into temptation." — Matthew 26:41'},
  {id:3,cat:'youth',day:'14',mo:'JUN',bg:'linear-gradient(145deg,#2A1A5C,#160A30)',icon:'fa-tools',img:'https://images.unsplash.com/photo-1522204523234-8729aa607dc7?w=600&h=400&fit=crop',title:'Youth Vocational Skills Workshop',desc:"Hands-on training in tailoring, carpentry & basic electronics for young adults.",time:'9:00 AM – 4:00 PM',loc:'ZHDMI Training Center',badge:'Workshop',badgeClass:'badge-purple',reg:true,verse:'"Whatever you do, work at it with all your heart." — Colossians 3:23'},
  {id:4,cat:'outreach',day:'21',mo:'JUN',bg:'linear-gradient(145deg,#1A3A1A,#0A200A)',icon:'fa-heartbeat',img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',title:'Community Health Screening Day',desc:'Free medical check-ups, health education & spiritual counseling for Johnsonville residents.',time:'8:00 AM – 2:00 PM',loc:'Johnsonville Community Ground',badge:'Outreach',badgeClass:'badge-green',reg:false,verse:'"He heals the brokenhearted and binds up their wounds." — Psalm 147:3'},
  {id:5,cat:'education',day:'05',mo:'JUL',bg:'linear-gradient(145deg,#1A3A5C,#0E1E2E)',icon:'fa-book-open',img:'https://images.unsplash.com/photo-1427504494785-cdebfce50d3b?w=600&h=400&fit=crop',title:'Back-to-School Supply Drive',desc:"Collecting and distributing essential school supplies for underprivileged children.",time:'All Day',loc:'ZHDMI Headquarters',badge:'Donation Drive',badgeClass:'badge-blue',reg:false,verse:'"Train up a child in the way he should go." — Proverbs 22:6'},
  {id:6,cat:'conference',day:'19',mo:'JUL',bg:'linear-gradient(145deg,#5C1010,#2A0808)',icon:'fa-cross',img:'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop',title:'Leadership Training for Church Planters',desc:'Equipping local leaders with biblical principles and practical strategies for church planting.',time:'9:00 AM – 5:00 PM',loc:'Monrovia Conference Center',badge:'Training',badgeClass:'badge-crimson',reg:true,verse:'"Go therefore and make disciples of all nations." — Matthew 28:19'},
];

/* ═══ SERMONS ═══ */
const SERMONS=[
  {id:1,series:'Foundations of Faith',title:'The Power of Prayer',spk:'Rev. Emmanuel Weah',date:'March 15, 2025',dur:'42:15',thumb:'fa-microphone',desc:'A deep teaching on persistent prayer and intimacy with God.',tags:['prayer','faith']},
  {id:2,series:'Deliverance Series',title:'Breaking Free from Bondage',spk:'Pastor Moses Tubman',date:'March 8, 2025',dur:'38:42',thumb:'fa-microphone',desc:'Practical steps and testimonies of freedom in Christ.',tags:['deliverance']},
  {id:3,series:'Healing & Wholeness',title:'God\'s Provision for Health',spk:'Dr. Sarah Johnson',date:'March 1, 2025',dur:'45:30',thumb:'fa-microphone',desc:'Exploring biblical care for body and spirit.',tags:['healing','health']},
  {id:4,series:'Foundations of Faith',title:'Living by Faith Not Sight',spk:'Rev. Emmanuel Weah',date:'February 22, 2025',dur:'40:15',thumb:'fa-microphone',desc:'On trusting God in uncertainty and crisis.',tags:['faith']},
  {id:5,series:'Community Outreach',title:'Loving Your Neighbor',spk:'Pastor Grace Kpondo',date:'February 15, 2025',dur:'35:50',thumb:'fa-microphone',desc:'Practical ministry lessons on community care.',tags:['community']},
  {id:6,series:'Deliverance Series',title:'Authority in Christ',spk:'Bishop Paul Flomo',date:'February 8, 2025',dur:'43:20',thumb:'fa-microphone',desc:'Teaching on exercising spiritual authority.',tags:['deliverance','authority']},
];

/* ═══ CAMPAIGNS ═══ */
const CAMPAIGNS=[];

/* ═══ GALLERY ═══ */
const GALLERY_DATA = [];

/* ═══ STATISTICS — COMPUTED FROM DATA ═══ */
function getStats(){
  return {
    totalEvents: EVENTS.length,
    totalSermons: SERMONS.length,
    programAreas: 6,
    nationServed: 1,
    nonProfit: 100,
    prayersSubmitted: 127 + Number(localStorage.getItem('totalPrayers') || 0),
    peoplePrayedFor: 2340 + Number(localStorage.getItem('totalPrayed') || 0),
    answeredPrayers: 48 + Number(localStorage.getItem('answeredPrayers') || 0),
    activeMembers: 1250,
    volunteersActive: 95,
    communitiesReached: 23,
  };
}

/* ═══ COUNTDOWN MANAGER ═══ */
const CountdownManager = {
  // Get next Sunday at 9 AM
  getNextServiceCountdown() {
    const now = new Date();
    const day = now.getDay();
    const daysUntilSunday = (7 - day) % 7 || 7;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(9, 0, 0, 0);
    return nextSunday;
  },

  // Get next major event
  getNextEventCountdown() {
    const now = new Date();
    const monthMap = { 'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5, 'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11 };
    
    // Find the soonest event in the future from the EVENTS data
    let upcomingEvents = EVENTS
      .filter(e => e.mo !== 'WEEKLY')
      .map(e => {
        const year = now.getFullYear();
        const month = monthMap[e.mo];
        const day = parseInt(e.day);
        const eventDate = new Date(year, month, day);
        // If the date has passed this year, assume it's for next year
        if (eventDate < now) eventDate.setFullYear(year + 1);
        return eventDate;
      })
      .sort((a, b) => a - b);

    if (upcomingEvents.length > 0) {
      return upcomingEvents[0];
    }
    
    // Fallback if no specific events found
    return this.getNextServiceCountdown();
  },

  // Format countdown display
  formatCountdown(targetDate) {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  },

  // Animate countdown element
  animateCountdown(elementId, targetDate) {
    const update = () => {
      const { d, h, m, s } = this.formatCountdown(targetDate);
      const els = {
        d: document.getElementById(elementId + '-d'),
        h: document.getElementById(elementId + '-h'),
        m: document.getElementById(elementId + '-m'),
        s: document.getElementById(elementId + '-s'),
      };
      if (els.d) els.d.textContent = String(d).padStart(2, '0');
      if (els.h) els.h.textContent = String(h).padStart(2, '0');
      if (els.m) els.m.textContent = String(m).padStart(2, '0');
      if (els.s) els.s.textContent = String(s).padStart(2, '0');
    };
    update();
    return setInterval(update, 1000);
  },
};

/* ═══ PRAYER WALL DATA ═══ */
const PRAYERS = [
  { id: 1, name: 'Abigail M.', initials: 'AM', type: 'healing', typeLabel: '🙏 Healing', typeClass: 'badge-crimson', text: 'Please pray for my husband who is very ill. The doctors say there is no hope, but I believe in our healing God. Thank you for standing with me.', time: '2 hours ago', prayCount: 24, answered: false, priv: false },
  { id: 2, name: 'James K.', initials: 'JK', type: 'provision', typeLabel: '💼 Provision', typeClass: 'badge-gold', text: 'I lost my job last month and have been struggling to provide for my family. I pray that God opens doors of opportunity and restores our stability.', time: '5 hours ago', prayCount: 18, answered: false, priv: false },
  { id: 3, name: 'Anonymous', initials: '??', type: 'family', typeLabel: '👨‍👩‍👧 Family', typeClass: 'badge-blue', text: 'Please pray for restoration in my family. There has been great conflict and we need God\'s peace and love to heal the brokenness between us.', time: 'Yesterday', prayCount: 31, answered: false, priv: false },
  { id: 4, name: 'Sarah R.', initials: 'SR', type: 'healing', typeLabel: '🙏 Healing', typeClass: 'badge-crimson', text: 'Praise God! My son who was diagnosed with a serious illness is now fully healed after the elders prayed over him at ZHDMI. Thank you Jesus!', time: '3 days ago', prayCount: 67, answered: true, priv: false },
  { id: 5, name: 'Emmanuel T.', initials: 'ET', type: 'deliverance', typeLabel: '🛡️ Deliverance', typeClass: 'badge-purple', text: 'I am struggling with bondage in my life that I cannot break free from on my own. Please intercede that God breaks every chain and sets me free.', time: '1 day ago', prayCount: 22, answered: false, priv: false },
  { id: 6, name: 'Grace W.', initials: 'GW', type: 'provision', typeLabel: '💼 Provision', typeClass: 'badge-gold', text: 'Praying for my daughter\'s university fees. We are believing God for a miracle as registration closes next week.', time: '4 hours ago', prayCount: 14, answered: false, priv: false },
  { id: 7, name: 'Pastor Moses', initials: 'PM', type: 'family', typeLabel: '👨‍👩‍👧 Family', typeClass: 'badge-blue', text: 'Praise report: The couple we prayed for last month has reconciled and is attending ZHDMI together. God is so faithful! Continue to pray for their growth.', time: '1 week ago', prayCount: 89, answered: true, priv: false },
  { id: 8, name: 'Anonymous', initials: '??', type: 'healing', typeLabel: '🙏 Healing', typeClass: 'badge-crimson', text: 'Dealing with a chronic health condition. Asking the prayer team to intercede. I know God heals and I hold on to James 5:14 with all my faith.', time: '6 hours ago', prayCount: 19, answered: false, priv: false },
];

/* Compatibility: older pages expect `PRAYER_POSTS` (fields: author, text, type, time, count)
   Create a normalized alias so existing templates keep working without edits. */
const PRAYER_POSTS = PRAYERS.map(p=>({
  id: p.id,
  author: p.name || p.initials || 'Anonymous',
  text: p.text,
  type: p.typeLabel || p.type || 'Prayer',
  time: p.time,
  count: Number(p.prayCount || 0)
}));

/* ═══ COMMON UTILITIES ═══ */
function getRandomEvent() {
  return EVENTS[Math.floor(Math.random() * EVENTS.length)];
}

function getRandomSermon() {
  return SERMONS[Math.floor(Math.random() * SERMONS.length)];
}

function getPrayer(id) {
  return PRAYERS.find(p => p.id === id);
}

function updateStats(key, value) {
  localStorage.setItem(key, value);
}
