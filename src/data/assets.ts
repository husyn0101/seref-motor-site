export const businessInfo = {
  name: "Şeref Motor",
  phone: "0535 556 67 85",
  whatsapp: "905355566785",
  address: "Manisa, Turgutlu, Atatürk Bulvarı, İstiklal Mahallesi No:117",
  locationUrl: "https://www.google.com/maps/search/?api=1&query=Şeref+Motor+Atatürk+Bulvarı+İstiklal+Mahallesi+No:117+Turgutlu",
  description: "Elektrikli motor bakım, tamir ve yedek parça hizmetleri profesyonel ekip tarafından sağlanmaktadır."
};

export const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'lastik', name: 'Lastikler' },
  { id: 'aku', name: 'Aküler' },
  { id: 'sarj', name: 'Şarj Aletleri' },
  { id: 'yedek-parca', name: 'Yedek Parçalar' },
  { id: 'stock', name: 'Stok Ürünler' }
];

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Tires (from motorfoto)
  { id: 't1', name: '2.50-14 Dublex Lastik', category: 'lastik', image: '/motorfoto/2.50-14 dublex lastik.webp', description: 'Dayanıklı ve yüksek yol tutuşlu dublex lastik.' },
  { id: 't3', name: '3-10 Dublex Lastik', category: 'lastik', image: '/motorfoto/3-10 dublex lastik.webp', description: 'Standart 3-10 dublex motor lastiği.' },
  { id: 't4', name: '3-8 Dublex Lastik', category: 'lastik', image: '/motorfoto/3-8 dublex lastik.webp', description: 'Yüksek performanslı 3-8 dublex lastik.' },
  { id: 't5', name: '3.50-10 Dublex Lastik', category: 'lastik', image: '/motorfoto/3.50-10 dublex lastik.webp', description: 'Geniş tabanlı, konforlu sürüş sağlayan lastik.' },
  
  // Batteries (from motorfoto)
  { id: 'b1', name: 'Bico Max 12V 24Ah Akü', category: 'aku', image: '/motorfoto/bico max 12v 24ah akü.webp', description: 'Uzun ömürlü ve yüksek kapasiteli elektrikli motor aküsü.' },
  { id: 'b2', name: 'Orbüs 12V 24Ah Akü', category: 'aku', image: '/motorfoto/orbüs 12v 24ah akü.webp', description: 'Güvenilir performans sunan Orbüs marka akü.' },
  { id: 'b3', name: 'Yeni Nesil Jel Akü', category: 'aku', image: '/motorfoto/yeni akü.webp', description: 'En son teknoloji ile üretilmiş verimli jel akü.' },
  { id: 'b4', name: 'Yüksek Performans Akü', category: 'aku', image: '/motorfoto/yeni akü2.webp', description: 'Zorlu koşullara dayanıklı yedek akü.' },
  
  // Chargers (from motorfoto)
  { id: 'c1', name: 'Cyhibo Akıllı Şarj Aleti', category: 'sarj', image: '/motorfoto/cyhibo akıllı sarj aleti.webp', description: 'Otomatik kesme özellikli akıllı şarj cihazı.' },
  { id: 'c2', name: 'Or-Tec Akıllı Şarj Aleti', category: 'sarj', image: '/motorfoto/or-tec akıllı sarj aleti.webp', description: 'Hızlı ve güvenli şarj sağlayan Or-Tec şarj aleti.' },
  { id: 'c3', name: 'Znli & Bix Şarj Seti', category: 'sarj', image: '/motorfoto/znli ve bix sarj aletleri.webp', description: 'Farklı modellerle uyumlu şarj aleti seçenekleri.' },

  // New Spare Parts (from elektriliparca)
  { id: 'ep1', name: '10 Jant Arka Motor (1200W)', category: 'yedek-parca', image: '/elektriliparca/10-jant-arka-motor-kampana-60-72v-1200-06-449.webp', description: '60-72V uyumlu 1200W kampanalı arka motor.' },
  { id: 'ep2', name: '12 Jant Arka Motor (1500W)', category: 'yedek-parca', image: '/elektriliparca/12-jant-arka-motor-72w-1500watt-diskli-11d867.webp', description: '72V 1500W disk fren uyumlu arka motor.' },
  { id: 'ep3', name: '12 Jant Arka Motor (2000W)', category: 'yedek-parca', image: '/elektriliparca/12-jant-arka-motor-komple-72w-2000watt--436c-.webp', description: '72V 2000W yüksek performanslı komple arka motor.' },
  { id: 'ep4', name: '12V 14Ah Ortec Akü', category: 'aku', image: '/elektriliparca/12v-14ah-aku-e-bike-ortec--e94420.webp', description: 'E-bike uyumlu kaliteli Ortec akü.' },
  { id: 'ep5', name: 'Amortisör', category: 'yedek-parca', image: '/elektriliparca/amortisör.webp', description: 'Konforlu sürüş için yedek amortisör.' },
  { id: 'ep6', name: 'Fren Balatası', category: 'yedek-parca', image: '/elektriliparca/balata.webp', description: 'Güvenli duruş için kaliteli fren balatası.' },
  { id: 'ep7', name: '43Ah Akıllı Beyin', category: 'yedek-parca', image: '/elektriliparca/buja43-akilli-ebike-beyin-43-ah-30-ext-0f3788.webp', description: '43Ah kapasiteli akıllı kontrol ünitesi.' },
  { id: 'ep8', name: '48Ah Akıllı Beyin', category: 'yedek-parca', image: '/elektriliparca/buja48-akilli-ebike-beyin-48-ah-hyper---4210-.webp', description: '48Ah Hyper akıllı e-bike beyni.' },
  { id: 'ep9', name: '2000W E-Bike Beyin', category: 'yedek-parca', image: '/elektriliparca/e-bike-cdi-beyin-60v-72v-60-ah-2000wat-2-4744.webp', description: '60V-72V 2000W uyumlu CDI beyin.' },
  { id: 'ep10', name: 'Hız Kontrol Cihazı', category: 'yedek-parca', image: '/elektriliparca/e-bike-hiz-kontrol-cihazi-60v-72v-60-a-cf-4c6.webp', description: '60V-72V 60A hız kontrol ünitesi.' },
  { id: 'ep11', name: 'E-Bike Balata', category: 'yedek-parca', image: '/elektriliparca/ebike balata.webp', description: 'E-bike modelleri için özel fren balatası.' },
  { id: 'ep12', name: '80Ah Monero Akü', category: 'aku', image: '/elektriliparca/ebike-12v-80ah-aku-233121174-mm-monero-ac7-9e.webp', description: '12V 80Ah yüksek kapasiteli Monero akü.' },
  { id: 'ep13', name: 'Kara Beyin', category: 'yedek-parca', image: '/elektriliparca/akıllı kara beyin.webp', description: 'Standart e-bike kontrol ünitesi.' },
  { id: 'ep14', name: 'Kontak Seti', category: 'yedek-parca', image: '/elektriliparca/kontak.webp', description: 'Komple kontak anahtarı ve kilit seti.' },
  { id: 'ep15', name: 'Ön Maşa', category: 'yedek-parca', image: '/elektriliparca/maşa.webp', description: 'Standart ön maşa yedek parçası.' },
  { id: 'ep16', name: 'Meka Bus Pro Ön Maşa', category: 'yedek-parca', image: '/elektriliparca/meka-bus-pro-on-masa-amortisorle_MTEyMzMwNzA1_1.webp', description: 'Amortisörlü profesyonel ön maşa seti.' },
  
  // Stock (from motorfoto)
  { id: 's1', name: 'Geniş Malzeme Stoğu', category: 'stock', image: '/motorfoto/malzeme stock.webp', description: 'Her türlü yedek parça ve aksesuar stoğumuz mevcuttur.' },
  { id: 's2', name: 'Akü Stok Ürünleri', category: 'stock', image: '/motorfoto/akü stock.webp', description: 'Çeşitli marka ve modellerde hazır akü stoklarımız.' },
  { id: 's3', name: 'Lastik Stok Ürünleri', category: 'stock', image: '/motorfoto/lastik stock.webp', description: 'Hemen montaja hazır farklı ebatlarda lastikler.' }
];

export const services = [
  { name: 'Akü Değişimi', image: '/motorfoto/akü değişim.webp', description: 'Eskiyen akülerinizi profesyonelce yeniliyoruz.' },
  { name: 'Lastik Değişimi', image: '/motorfoto/3-10 dublex lastik.webp', description: 'Güvenliğiniz için aşınmış lastikleri anında değiştiriyoruz.' },
  { name: 'Beyin Tamiri', image: '/motorfoto/beyin değişim.webp', description: 'Elektronik kontrol ünitelerini uzman kadromuzla tamir ediyoruz.' },
  { name: 'Motor Bakımı', image: '/motorfoto/arka motor değişim.webp', description: 'Motorunuzun performansını artırmak için periyodik bakım hizmeti.' },
  { name: 'Maşa Tamiri', image: '/motorfoto/maşa tamir.webp', description: 'Ön maşa ve amortisör sistemlerinin profesyonel onarımı.' },
  { name: 'Genel Onarım', image: '/motorfoto/tamir.webp', description: 'Her türlü mekanik arızada profesyonel çözüm.' }
];

export const heroImage = '/motorfoto/ŞEREF MOTOR KAPAK FOTOĞRAFI.webp';
export const aboutImage = '/motorfoto/usta.webp';
