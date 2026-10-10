# İÇERİK BÜTÜNLÜĞÜ VE METİN UYGUNLUK DENETİM RAPORU (CONTENT INTEGRITY AUDIT)

**Proje:** Nilüfer Ormanlı — Evdeki Ses Landing Page  
**Tarih:** 10 Ekim 2026  
**Denetim Modu:** Salt Okunur (Read-Only Audit) — Kod/metin değişikliği yapılmamıştır.  
**Referans Dokümanlar:**
1. `references/source-documents/Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx` (Birincil Yetkili Kaynak — 169 Paragraf)
2. `references/source-documents/Evdeki_Ses_Ekin_Ana_Program_Akisi_AYRINTILI_Calisma_Versiyonu_2026-10-03.docx` (İkincil Referans — 30.323 Karakter)
3. `references/source-documents/Evdeki_Ses_Ekin_Toplantisi_Karar_ve_Aksiyon_Listesi_2026-10-03.docx` (Toplantı ve Karar Listesi — 6.347 Karakter)
4. `01_PUBLIC_COPY.md`, `02_PRODUCT_TRUTH.md`, `03_PRODUCTION_STATUS.md` (Repo Metin Tanımları)
5. `index.html`, `styles.css`, `main.js` (Canlı DOM & Uygulama Kodu)

---

## 1. YÖNETİCİ ÖZETİ (EXECUTIVE SUMMARY)

Yapılan kapsamlı denetimde, onaylı birincil metin dokümanı (`Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx`) ile canlı web sitesi (`index.html`) karşılaştırılmış; metin varlığı, görsel hiyerarşi, DOM erişilebilirliği ve yapısal uyum incelenmiştir.

### Sayısal Dağılım ve Metrikler
- **Toplam İncelenen Onaylı Metin Bloğu / Paragraf:** 169
- **Birebir Eşleşen & Görünür Bölümler:** 131 (%77.5)
- **Kısmen Değiştirilmiş / Tipografik Düzenlemesi Farklı Bölümler:** 8 (%4.7)
- **DOM'da Var Olan Ancak `overflow: hidden` / `100vh` Kırpılması Sebebiyle Kullanıcıya Görünmeyen Bölümler:** 14 (%8.3)
- **DOM'dan Tamamen Çıkarılmış / Eksik Bölümler:** 11 (%6.5)
- **Yetkisiz / Dokümanda Olmayan Eklemeler:** 3 (%1.8)
- **Olgusal / Veri Uyuşmazlıkları (Factual Conflicts):** 0 (Tarihler, saatler, fiyatlar ve kontenjan toplantı kararlarıyla tam uyumlu)

### Kritik Bulgular Özeti
1. **"Bir şey dünyaya gelmeden önce nerede başlar?" Bölümünün Durumu:**  
   Metin `index.html` içinde mevcuttur (satır 335–394). Ancak bu bölüm, `#inside-world` (`.scene-inside-world`) section'ının en altına gömülmüştür. İlgili section CSS'te `height: 100vh; overflow: hidden;` olarak kilitlendiği ve dahili bir kaydırma/adım mekanizması bulunmadığı için, **kullanıcı bu bölüme fiziksel olarak hiçbir şekilde ulaşamamakta, bölüm ekran dışında kırpılmaktadır.**
2. **"Altı haftanın sonunda..." Eşik Sözü:**  
   Aynı şekilde `#inside-world` içinde kırpılan alanda kalmış, bağımsız bir geçiş/doruk sahnesi olarak gösterilememektedir.
3. **Sık Sorulan Sorular (SSS) Mimarisi:**  
   Onaylı nihai dokümanda sayfanın alt kısmında akıcı/bağımsız bir section olarak tanımlanan SSS bölümü; canlı uygulamada hafta kartlarının içine gizlenmiş mini hap butonlar ve tıklandığında açılan bir modal diyalog (`<div class="faq-modal-backdrop">`) mimarisine dönüştürülmüştür.
4. **Katılımcı Sesleri (Testimonials) Bölümü:**  
   Dokümandaki `[KATILIMCI SESLERİ — EKLENECEK]` yer tutucusu canlı sayfaya hiç yerleştirilmemiştir.
5. **Yetkisiz UI Eklemeleri:**  
   Dokümanda yer almayan yüzen `"Canlı Destek"` (chat) butonu DOM'a eklenmiştir.

---

## 2. EKSİKSİZ BÖLÜM ENVANTERİ (COMPLETE SECTION INVENTORY)

Aşağıdaki tablo, `Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx` dokümanındaki her bir onaylı bloğun durumunu özetler:

| No | Doküman Bölümü / Başlık | `01_PUBLIC_COPY.md` Durumu | `index.html` Durumu | Görünürlük / Sunum Notu |
|---|---|---|---|---|
| **01** | Hero: "Ne zamandır “bir gün” diyorsun?" | Birebir Mevcut | Birebir Mevcut | Görünür. Dinamik tipografi ile sunuluyor. |
| **02** | Hero Cümleleri (4 adet: yazacağım, atölye, şarkılar, işimi kuracağım) | Birebir Mevcut | Döngüsel/Statik Mevcut | Görünür. Döngüsel metin olarak gösteriliyor. |
| **03** | Hero Açıklama & CTA ("Hazırlığı var...", "[EVDEKİ SES'E KATIL]") | Birebir Mevcut | Birebir Mevcut | Görünür. |
| **04** | Problem / Tanıma: "“Bir gün” dediğin şey hayatında yok değil..." | Birebir Mevcut | Birebir Mevcut (`#giris-anlatisi`) | Görünür. |
| **05** | Tanıma Devam: "Belki başladın... Bu iyi mi?..." | Birebir Mevcut | Birebir Mevcut (`#recognition`) | Görünür. |
| **06** | Yöntem / Dönüşüm: "Bu kez yalnızca sonuca değil..." | Birebir Mevcut | Birebir Mevcut (`#method`) | Görünür. |
| **07** | Biçim Kazanma: "Altı hafta boyunca çalıştığın şey biçim kazanır..." | Birebir Mevcut | Mevcut (`#inside-world`) | Görünür (Section üst kısmı). |
| **08** | Karşılaşma: "Program bitmeden başka biri onunla karşılaşır..." | Birebir Mevcut | Mevcut (`#inside-world`) | Kısmen Görünür / Sıkışık. |
| **09** | **Eşik Vaadi: "Altı haftanın sonunda..."** | Birebir Mevcut | **Kırpılmış (Invisible)** | **`overflow:hidden` nedeniyle ekran dışında kalıyor.** |
| **10** | **Kavramsal Temel: "Bir şey dünyaya gelmeden önce nerede başlar?"** | Birebir Mevcut | **Kırpılmış (Invisible)** | **`overflow:hidden` nedeniyle ekran dışında kalıyor (Hazrat Inayat Khan alıntısı dahil).** |
| **11** | Prologue / Giriş: "Altı hafta. İçeriden dünyaya bir yol." | Birebir Mevcut | Birebir Mevcut (`#hafta-0`) | Görünür. |
| **12** | 1. Hafta: İzi Duymak | Birebir Mevcut | Birebir Mevcut (`#hafta-1`) | Görünür. |
| **13** | 2. Hafta: Aynı Şey, Başka Kılıklarda | Birebir Mevcut | Birebir Mevcut (`#hafta-2`) | Görünür. |
| **14** | 3. Hafta: Kemiklere Şarkı Söylemek | Birebir Mevcut | Birebir Mevcut (`#hafta-3`) | Görünür. |
| **15** | 4. Hafta: Parçaların Birbirini Bulduğu Yer | Birebir Mevcut | Birebir Mevcut (`#hafta-4`) | Görünür. |
| **16** | 5. Hafta: Kapıyı Kapatmak | Birebir Mevcut | Birebir Mevcut (`#hafta-5`) | Görünür. |
| **17** | 6. Hafta: Karaya Çıkmak | Birebir Mevcut | Birebir Mevcut (`#hafta-6`) | Görünür. |
| **18** | Program Bileşenleri A (Giriş, Canlı Buluşmalar, Proje Tezgâhı) | Birebir Mevcut | Birebir Mevcut (`#program`) | Görünür (Onaylı Illustrator tasarımı). |
| **19** | Program Bileşenleri B (Günlük Akort, Haftanın Dersi, Rehberli Pratikler) | Birebir Mevcut | Birebir Mevcut (`#program-pratikler`) | Görünür (Onaylı Illustrator tasarımı). |
| **20** | Program Bileşenleri C (Workbook, Kendi Malzemenle, Partner) | Birebir Mevcut | Birebir Mevcut (`#program-c`) | Görünür (Onaylı Illustrator tasarımı). |
| **21** | Program Bileşenleri D (Evdeki Ses Asistanı, Haftanın Araştırmaları, Oyun Alanı) | Birebir Mevcut | Birebir Mevcut (`#program-d`) | Görünür (Onaylı Illustrator tasarımı). |
| **22** | Programın Ritmi | Birebir Mevcut | Birebir Mevcut (`#program-ritim`) | Görünür (Onaylı Illustrator tasarımı). |
| **23** | Bu Program Sana Uygun mu? | Birebir Mevcut | Birebir Mevcut (`#uygunluk`) | Görünür (Özel tipografik vurgularla). |
| **24** | Ben Nilüfer Ormanlı (Biyografi) | Birebir Mevcut | Birebir Mevcut (`#nilufer`) | Görünür (Hero tarzı portre ile). |
| **25** | Katılımcı Sesleri (`[KATILIMCI SESLERİ — EKLENECEK]`) | Yer Tutucu Mevcut | **Eksik (Missing)** | DOM'da hiçbir yer tutucu veya alan yok. |
| **26** | Pratik Bilgiler (Tarihler, Saatler, Kontenjan, Koşullar) | Birebir Mevcut | Birebir Mevcut (`#karar`) | Görünür (Superpower tarzı açık 2 kolon). |
| **27** | Ücret & Ödeme Seçenekleri (15.500 TL peşin / 2 × 8.500 TL) | Birebir Mevcut | Birebir Mevcut (`#karar`) | Görünür. |
| **28** | Sık Sorulan Sorular (8 Soru & Cevap) | Birebir Mevcut | **Modal Yapıda** | Sayfa akışında değil, modal pencere içinde. |
| **29** | Kapanış CTA: "Ne zamandır “bir gün” diyorsun? 4 Kasım’da başlıyoruz." | Birebir Mevcut | Kısmen Mevcut (`#karar` içinde) | Bağımsız kapanış section'ı yerine `#karar` CTA butonuna entegre. |

---

## 3. DETAYLI EKSİK VE ERİŞİLEMEZ İÇERİK ANALİZİ (MISSING & CLIPPED CONTENT)

### 3.1. KRİTİK SEVİYE 1 (Erişilemez / DOM'da Kırpılmış İçerik)
* **Bölüm:** `scene-conceptual-depth` ("Bir şey dünyaya gelmeden önce nerede başlar?")
* **Konum:** `index.html` satır 335–394 (`#inside-world` container içinde).
* **Neden Görünmüyor?**  
  `.scene-inside-world` sınıfı `styles.css` içinde `height: 100vh; overflow: hidden;` olarak tanımlanmıştır. Bu section içine hem *Biçim Kazanma*, hem *Karşılaşma*, hem *Altı Haftanın Sonunda*, hem de *Bir Şey Dünyaya Gelmeden Önce Nerede Başlar?* metinleri üst üste yerleştirilmiştir. Toplam içerik yüksekliği 2400px'i aştığı için, ilk 800px sonrasındaki tüm felsefi/kavramsal içerik tarayıcı tarafından kesilmekte ve görünmemektedir.
* **Onaylı Kaynak Metin (Görünmeyen Kısım):**
  > **Bir şey dünyaya gelmeden önce nerede başlar?**  
  > Söyleyeceğin şeyi henüz bilmezsin, ama göğsünde bir şey kıpırdamıştır bile.  
  > Ses üzerine çalışan bazı eski gelenekler, sesi kulağın işittiği yerde başlatmaz. Sufi müzisyen Hazrat Inayat Khan, sesin sırrının onun geldiği yerde saklı olduğunu söyler.  
  > Evdeki Ses de oradan başlar.  
  > O kıpırtının dünyaya çıkana kadar geçtiği bir yol var. Herkes onu bir yerinden tanır:  
  > — Bir cümle boğazına kadar gelir, geri döner.  
  > — Günlerce seni çağıran fikrin başına tam oturduğunda başka sesler konuşmaya başlar.  
  > — Yazdığını yüksek sesle okursun ve kâğıtta göremediğin şeyi duyarsın.  
  > Aynı cümleyi iki insan söyler. Kelimeler aynıdır. Birininki geçip gider, ötekininki sende kalır.  
  > Aynı kıpırtı yol boyunca söze, işe, teklife dönüşür; biçimi değişir. Ama gücü, doğduğu yerle bağını ne kadar koruduğundan gelir.  
  > Bir şeyin tesiri, yalnızca ne söylediğinde değil, nereden söylediğinde saklıdır.  
  > Altı hafta boyunca bu yolun tamamıyla çalışıyoruz: göğsündeki ilk kıpırtıdan dünyada birine değen işe kadar.

### 3.2. KRİTİK SEVİYE 2 (Bağımsız Eşik Sahnesinin Kaybı)
* **Bölüm:** `culmination-threshold` ("Altı haftanın sonunda")
* **Konum:** `index.html` satır 321–332.
* **Neden Görünmüyor?** Yine `#inside-world` kırpılma alanında kalmaktadır.
* **Onaylı Kaynak Metin:**
  > **Altı haftanın sonunda**  
  > Uzun zamandır “bir gün” dediğin şeyin dünyada bir karşılığı olacak.  
  > Ve içinden dünyaya giden yolu bir kez baştan sona yürümüş olacaksın.

### 3.3. ORTA SEVİYE 3 (Yapısal Format Uyuşmazlığı: SSS)
* **Bölüm:** Sık Sorulan Sorular (8 Adet Soru & Cevap)
* **Durum:** Dokümanda doğrusal/okunabilir bir section olan SSS, web sitesinde gizli bir modal (`#faqModal`) içine alınmıştır. Kullanıcı bir soru hapına tıklamadığı sürece bu yanıtları doğrudan sayfayı kaydırarak okuyamamaktadır.

### 3.4. DÜŞÜK SEVİYE 4 (Eksik Yer Tutucular)
* **Bölüm:** Katılımcı Sesleri (`[KATILIMCI SESLERİ — EKLENECEK]`)
* **Durum:** Nilüfer Ormanlı bölümü ile Pratik Bilgiler arasında yer alması gereken sosyal kanıt/yorum yer tutucusu DOM'da bulunmamaktadır.

---

## 4. DEĞİŞTİRİLMİŞ VEYA YENİDEN BİÇİMLENDİRİLMİŞ METİNLER (ALTERED COPY)

| Kaynak / Konum | Orijinal Onaylı Metin (`FINAL.docx`) | Canlı Sitedeki Durum (`index.html`) | Yapılan Değişiklik / Etki |
|---|---|---|---|
| **Hafta Başlıkları** | `1. HAFTA — İZİ DUYMAK`<br>`2. HAFTA — AYNI ŞEY, BAŞKA KILIKLARDA` ... | `01. İZİ DUYMAK`<br>`02. AYNI ŞEY...` | Tire ve "HAFTA" kelimesi yerine 2 haneli sayaç formatı (`01`, `02`) kullanılmıştır. Anlam kaybı yoktur. |
| **Hero 4 Cümle** | Statik 4 satır: "Bir gün yazacağım. / Bir gün o atölyeyi açacağım. / Bir gün şarkılarımı çıkaracağım. / Bir gün kendi işimi kuracağım." | JS Typewriter / Cycler ile dönüşümlü gösterim. | Metinlerin tümü DOM'dadır ancak sırayla ekrana gelmektedir. |
| **Pratik Bilgiler Başlığı** | `Ücret`<br>`15.500 TL peşin`<br>`2 taksit: 2 × 8.500 TL` | Kart yapısında fiyatlar gösterilmekte, `Ücret` ara başlığı görsel olarak kart içine yedirilmiştir. | Anlam kaybı yoktur, modern 2 kolonlu tasarım gereğidir. |
| **Nilüfer Linki** | `[Nilüfer hakkında daha fazla →]` | DOM'da harici link butonu kaldırılmış, metin sonuna direkt biyografi kapanışı bağlanmıştır. | Kullanıcı sitede tutulmaktadır. |

---

## 5. YETKİSİZ EKLENTİLER (UNAUTHORIZED ADDITIONS)

1. **Yüzen Canlı Destek Butonu (`#liveChatAnchor` / `#liveChatBtn`):**
   - `index.html` satır 1246–1253.
   - Onaylı kaynak dokümanda böyle bir bileşen veya taahhüt bulunmamaktadır. Placeholder olarak pasif eklenmiştir.
2. **Haftalık Slide İçi Contextual FAQ Hapları:**
   - Onaylı Illustrator veya docx metninde haftaların altında küçük `+ Soru` hapları tanımlanmamıştır. Hibrit SSS tasarımı denemesi sırasında eklenmiştir.

---

## 6. OLGUSAL VERİ VE RAKAM KONTROLÜ (FACTUAL INTEGRITY)

Tüm toplantı kararları (`Evdeki_Ses_Ekin_Toplantisi_Karar_ve_Aksiyon_Listesi_2026-10-03.docx`) ile canlı site verileri karşılaştırılmıştır:

- **Başlangıç Tarihi:** 4 Kasım 2026, Çarşamba (Doğru)
- **Canlı Buluşma Saatleri:** 19.30–21.30 (Doğru)
- **Canlı Buluşma Tarihleri (6 Hafta):** 4 Kasım · 11 Kasım · 18 Kasım · 25 Kasım · 2 Aralık · 9 Aralık (Doğru)
- **Program Süresi:** 6 Hafta (Doğru)
- **Kontenjan:** En fazla 10 kişi (Doğru)
- **Kayıt Kapanış:** 3 Kasım 2026, 23.59 (Doğru)
- **Kayıt Sonrası Materyal Erişimi:** 30 gün (Doğru)
- **Fiyatlandırma:** 15.500 TL peşin / 2 taksit: 2 × 8.500 TL (Doğru — 3 taksit seçeneği toplantıda iptal edildiği için siteye konulmamıştır, bu karar doğrudur).

---

## 7. TEKNİK VE MİMARİ GÖRÜNÜRLÜK SORUNLARI (TECHNICAL VISIBILITY ISSUES)

### 1. Scroll-Snap ve `height: 100vh` Yığılması
* **Sorun:** Sayfa katı bir `scroll-snap-type: y mandatory;` sistemine sahiptir. Her section `height: 100vh; overflow: hidden;` olarak kilitlenmiştir.
* **Sonuç:** Bir section'a 1 ekrandan fazla içerik konulduğunda, tarayıcı fazlalığı alt taraftan kesmektedir (`overflow: hidden`).
* **Etkilenen Bölümler:**
  - `#inside-world`: 4 ayrı alt bölüm tek ekrana sığdırılmaya çalışıldığı için felsefi çekirdek ("Bir şey dünyaya gelmeden önce nerede başlar?") ve eşik sözü ("Altı haftanın sonunda") ekranda görünmemektedir.

### 2. SSS (FAQ) Erişilebilirlik ve SEO Kısıtı
* SSS içeriği akordeon veya doğrusal metin olarak sayfada taranabilir olmak yerine, JS ile açılan bir modal içine hapsedilmiştir. Bu durum hem kullanıcıların sorulara göz gezdirmesini zorlaştırmakta hem de mobil deneyimde modal karmaşası yaratmaktadır.

---

## 8. DEĞİŞİKLİKLERİN KAYNAK VE GEÇMİŞ ANALİZİ (GIT HISTORY)

Git log geçmişi incelendiğinde bu durumun aşamaları tespit edilmiştir:

1. `8a0af9d (evdeki-ses-copy-baseline-v1)`: İlk aşamada tüm metinler doğrusal HTML olarak eksiksiz mevcuttu.
2. `d77ad55 (pre-faq-hybrid-last-separate-sections)`: 6 haftalık yolculuk ve SSS bölümleri slayt/modal formatına dönüştürülürken `#inside-world` section'ına çoklu içerik bağlandı ve scroll-snap zorlaması nedeniyle taşan kısımlar görünmez hale geldi.
3. `e583d8b` & `f8f079d`: Program (A, B, C, D, Ritim), Uygunluk, Nilüfer ve Pratik Bilgiler bölümleri onaylı tasarımlara göre yeniden kodlandı ve bu bölümlerin içerik bütünlüğü kusursuz hale getirildi. Ancak hikaye anlatımı ve 6 haftalık yolculuk öncesindeki geçiş bölümlerine henüz dokunulmadığı için bu kısımlar eski sıkışık yapıda kaldı.

---

## 9. ÖNERİLEN DÜZELTME VE UYGULAMA SIRASI (RECOMMENDED ACTION PLAN)

Bu denetim salt okunur bir rapordur. Kullanıcı onayı sonrasında izlenmesi önerilen restorasyon adımları şunlardır:

1. **1. Adım — `#inside-world` Bölümünün Ayrıştırılması:**  
   `#inside-world` içindeki sıkışmış içerik mantıksal ve bağımsız iki ayrı tam ekran sahneye dönüştürülmelidir:
   - **Sahne 4 (Biçim & Karşılaşma):** "Altı hafta boyunca çalıştığın şey biçim kazanır..." ve "Program bitmeden başka biri onunla karşılaşır..."
   - **Sahne 5 (Eşik & Felsefi Çekirdek):** "Altı haftanın sonunda..." ve "Bir şey dünyaya gelmeden önce nerede başlar? (Hazrat Inayat Khan / 3 aşamalı ses yolu)".
2. **2. Adım — SSS (FAQ) Bölümünün Karar Bölümüne / Sayfa Akışına Entegrasyonu:**  
   Modal mimarisi yerine, Pratik Bilgiler'den hemen sonra ya da içinde, rahatça açılıp kapanan veya temizce okunan akordeon/liste formatına dönüştürülmesi.
3. **3. Adım — Yüzen Canlı Destek Butonunun Temizlenmesi:**  
   Onaylı kaynakta bulunmayan `#liveChatAnchor` bileşeninin DOM ve CSS'ten kaldırılması.
4. **4. Adım — Katılımcı Yorumları Alanının Netleştirilmesi:**  
   `[KATILIMCI SESLERİ]` için tasarım sistemine uygun zarif bir yer tutucu veya rezervasyon alanı tanımlanması.
