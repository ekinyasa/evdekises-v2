# Evdeki Ses — Revizyon Merkezi

18 Ekim 2026 · Europe/Istanbul · R0004 / Typography Decision Update — R0003 hardening ve R0002 kaynak envanteri korunmuştur

## Kapsam ve ortak kaynak

Asıl klasör: /Users/ekinyasa/BrandWork/Nilufer/evdekises-antigrv-landing/revision/. Work ve Antigravity aynı fiziksel beş Markdown dosyasını yeniden okuyarak çalışır. Ayrı kopyalarda paralel düzenleme yapılmaz; aynı anda tek düzenleyici. Dosya erişimi otomatik senkronizasyon, kalıcı yazma izni veya GitHub’a gönderim anlamına gelmez. R0004 yalnız tipografi karar kayıtlarını günceller; tasarım, landing kodu, public copy, referanslar ve yayın değiştirilmez. Git işlemi yapılmaz.

- [SECTION_TRACKER.md](SECTION_TRACKER.md): mevcut sayfa sırası, PDF ve feedback eşlemesi.
- [DECISIONS.md](DECISIONS.md): CONFIRMED/PROPOSED/PENDING kararlar ve SUPERSEDED geçmiş.
- [OPEN_DEPENDENCIES.md](OPEN_DEPENDENCIES.md): kaynak, varlık, ödeme, hukuk ve karar bağımlılıkları.
- [DESIGN_HANDOFF.md](DESIGN_HANDOFF.md): kesin metin sözleşmeleri, kabul kontrolleri ve tasarım inceleme hazırlığı.

## Korunacak kaynak ayrımı

A. Kod = Nilüfer’in gördüğü ESKİ uygulama. Son tasarım veya final onay değildir.
B. Illustrator PDF = daha yeni, henüz uygulanmamış çalışma. PDF’de bulunmak onay kanıtı değildir.
C. 12 Ekim = korunacak yönler + okunabilirlik + tasarım düzeltmeleri + ek istekler; hiçbir başlık/özet atılmadı.
D. 14 Ekim = açık çatışmada üstün yeni müşteri kararı. Çatışmayan 12 Ekim maddeleri yürürlükte.
E. Public copy = yeni açık müşteri değişikliği dışındaki kamu metninin yetkili kaynağı; ürün belgesinden yeni satış cümlesi türetilmez.

Belgede CONFIRMED bir gereksinim, o bölümün çizimi onaylandı veya kod uygulandı demek değildir. DESIGN ve CODE daima ayrı. Üç taksit talebi alınmıştır; uygulanabilirlik ve fiyat UNVERIFIED/PENDING. Hukuki şartlar PENDING.

## Kaynak manifestosu — R0002 snapshot, yeniden konsolide edilmedi

Aşağıdaki dokuz kaynak okundu; PDF’nin 25 sayfasının tamamı bellekte render edilip görüldü. PDF10–16 büyük ölçüde raster olduğundan sadece metin çıkarımıyla eşlenmedi. Üç eski kaynak DOCX ayrıca yalnız tarih konumlarını taramak için okundu; bu onların bütününün yeniden onaylandığı anlamına gelmez.

| ID | Proje köküne göre kaynak | SHA-256 / konsolidasyon başlangıcı |
|---|---|---|
| CODE | `index.html` | fdf1716e22825fe02111f8ec758b7f8bfe526580836e461b1e74760470d7a36a |
| CSS | `styles.css` | fb686d013b9e4b8c976ef7f7faedf06cb27bcb47525b4e25380d1bd795ae3efe |
| JS | `main.js` | 9260e721488565ad021a17274811fd16d20ff29996a1c73e9f2ff1998964d40d |
| COPY | `01_PUBLIC_COPY.md` | f041ad993d4aa30111dc0f869bf44088b4a9573fc6a6c000f01dd4ffbb44a047 |
| PRODUCT | `02_PRODUCT_TRUTH.md` | d593fab875b66cc1dad34c8ea6a76d23fec529944490f9f7f73ee8fb9e79ba70 |
| OPS | `03_PRODUCTION_STATUS.md` | 9e0b8a514d6d2ace94bf693ac6bdc778f529c9a9b8714a8588a7e0090573ab10 |
| PDF | `revision/references/illustrator-latest.pdf` | 21af1b80a6b4eb9480df7ed288970898a9c491a5f3b0756fb576b49262387dde |
| F12 | `revision/references/readability-feedback.md` | 708f63b58921fbbb81c1d87e96128ec1d37924e1d7b286945d9299578a971d3c |
| F14 | `revision/references/nilufer-feedback-2026-10-14.md` | 88ab2d9885a46cdad5127db7462a667cb9ceb40219069a9d2aac97323e3433d2 |

COPY: 01_PUBLIC_COPY.md’nin tamamı; PRODUCT: 02_PRODUCT_TRUTH.md’nin tamamı, nihai müfredat değildir; OPS: 03_PRODUCTION_STATUS.md’nin tamamı, 3 Ekim çalışma durumu. Kaynakların kendileri değiştirilmez. Eski takvim, bu dosyalar kendilerini CURRENT/FINAL diye tanımlasa dahi DEC-019 tarafından geçersiz kılınmıştır.

## Sayım yöntemi ve kapsam

- Mevcut akış: 23 gerçek HTML section + 1 kapanış/footer = **24**. FAQ modalı ve planlanan testimonial, içerik CTA ve soru kapısı bu sayıya eklenmez.
- PDF: **25/25 sayfa eşlendi**; sayfa8+9 aynı kod bölümüne, sayfa17–20 dört eski panele karşılık gelir ve yeni tek 10 kart sistemiyle değişir. Final bölüm sayısı henüz kilitlenmedi.
- Feedback: **152 kaynak kaydı = 114 F12 + 38 F14**. Tekrarlanan talepler, koruma gözlemleri ve özetler ayrı kaynak kayıtlarıdır; 152 benzersiz tasarım işi veya 152 kod görevi değildir. Her gövde satırı sabit ID alır; başlıklar/başlangıç bilgileri coverage tablosunda sınıflıdır.
- **10 SUPERSEDED karar grubu** DECISIONS’ta eski/yeni kaynaklarıyla kayıtlı; 12 Ekim satırlarının 7’si tamamen, 5’i kısmen superseded. Kısmi kayıtta korunacak parça açıkça yazılır.
- **16 global kural**, **22 kabul kontrolü**; teknik gözlemler ve PDF içi notlar ayrıca izlenir. Hiçbir bölümün CODE durumu bu envanterle tamamlandıya geçirilmez.

Öncelikler P0 = yayın/erişim/tarih/ödeme-hukuk doğruluğu; P1 = final tasarım ve okunabilirlik. Bunlar envanter için önerilen iş sırasıdır, müşterinin puanladığı öncelikler değildir.

Durum sözlüğü: CONFIRMED = açık müşteri/kullanıcı gereksinimi; PROPOSED = seçenek/yorum, onay yok; PENDING = gerekli bilgi veya karar yok; SUPERSEDED = belirtilmiş kapsamda daha yeni kararla geçersiz. R0002 DESIGN/CODE etiketleri başlangıç notlarıdır. Geçerli R0003 DESIGN STATUS, CODE STATUS ve closure kuralları aşağıdaki ek ile SECTION_TRACKER’da tanımlıdır.

## Kesin takvim — DEC-019

Başlangıç **11 Kasım 2026**. Canlılar **11, 18, 25 Kasım; 2, 9, 16 Aralık**, Çarşamba **19.30–21.30** (Europe/Istanbul). Kayıt kapanışı **10 Kasım 2026, 23.59**. Son canlı **16 Aralık**. Altı hafta değişmedi; ek materyal erişimi için operasyon teyidi ayrı. 9 Aralık yeni takvimde de geçerlidir; yalnız eski bitiş rolü geçersizdir.

### Eski tarihlerin bütün konumları

33 metin/DOCX konumu + PDF24’te 3 tarih alanı ve PDF25’te 1 kapanış tarihi = 37 tespit. Aynı satırda birden çok tarih tek konum sayılır. DOCX P numarası word/document.xml içindeki paragraf sırasıdır. Arşiv/asıl feedback geriye dönük değiştirilmez; yürürlükte kaynak diye kullanılmaması sağlanır. Yeni tarihler şu anda yalnız revizyon belgelerinde kayıtlı; eski landing ve public kaynaklar halen eski tarihleri içerir.

| ID | Kaynak ve konum | Bulunan tarihsel ifade | İşlem sınırı |
|---|---|---|---|
| DATE-001 | `00_ANTIGRAVITY_BRIEF.md:L595` | 4 Kasım 2026 | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-002 | `00_ANTIGRAVITY_BRIEF.md:L652` | 4 Kasım’da başlıyoruz. | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-003 | `01_PUBLIC_COPY.md:L288` | **Başlangıç:** 4 Kasım 2026, Çarşamba | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-004 | `01_PUBLIC_COPY.md:L295` | **4 Kasım · 11 Kasım · 18 Kasım · 25 Kasım · 2 Aralık · 9 Aralık** | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-005 | `01_PUBLIC_COPY.md:L301` | **Kayıtlar 3 Kasım 2026, 23.59’da kapanıyor.** | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-006 | `01_PUBLIC_COPY.md:L353` | **4 Kasım’da başlıyoruz.** | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-007 | `02_PRODUCT_TRUTH.md:L383` | Başlangıç	4 Kasım 2026, Çarşamba | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-008 | `02_PRODUCT_TRUTH.md:L385` | Canlı tarihler	4, 11, 18, 25 Kasım; 2 ve 9 Aralık | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-009 | `02_PRODUCT_TRUTH.md:L389` | Kayıt kapanışı	3 Kasım 2026, 23.59 | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-010 | `03_PRODUCTION_STATUS.md:L79` | • Program başlangıcı: 4 Kasım 2026 | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-011 | `03_PRODUCTION_STATUS.md:L81` | • Canlı tarihler: 4, 11, 18, 25 Kasım; 2 ve 9 Aralık | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-012 | `03_PRODUCTION_STATUS.md:L84` | • Kayıt kapanışı: 3 Kasım 2026, 23.59 | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-013 | `CONTENT_AUDIT_2026-10-10.md:L76` | \| **29** \| Kapanış CTA: "Ne zamandır “bir gün” diyorsun? 4 Kasım’da başlıyoruz." \| Birebir Mevcut \| Kısmen Mevcut (`#karar` içinde) \| Bağımsız kapanış section'ı yerine `#karar` CTA butonuna entegre. \| | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-014 | `CONTENT_AUDIT_2026-10-10.md:L145` | - **Başlangıç Tarihi:** 4 Kasım 2026, Çarşamba (Doğru) | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-015 | `CONTENT_AUDIT_2026-10-10.md:L147` | - **Canlı Buluşma Tarihleri (6 Hafta):** 4 Kasım · 11 Kasım · 18 Kasım · 25 Kasım · 2 Aralık · 9 Aralık (Doğru) | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-016 | `CONTENT_AUDIT_2026-10-10.md:L150` | - **Kayıt Kapanış:** 3 Kasım 2026, 23.59 (Doğru) | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-017 | `index.html:L1008` | <span class="practical-schedule-val">4 Kasım 2026, Çarşamba</span> | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-018 | `index.html:L1059` | <p class="practical-deadline-main"><strong>Kayıtlar 3 Kasım 2026, 23.59’da kapanıyor.</strong></p> | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-019 | `index.html:L1070` | <p>4 Kasım · 11 Kasım · 18 Kasım · 25 Kasım · 2 Aralık · 9 Aralık</p> | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-020 | `index.html:L1090` | <p class="close-date">4 Kasım’da başlıyoruz.</p> | Gelecek uygulama/kaynak bakımında düzelt; şimdi salt okunur |
| DATE-021 | `references/source-documents/Evdeki_Ses_Ekin_Ana_Program_Akisi_AYRINTILI_Calisma_Versiyonu_2026-10-03.docx:P409` | 4 Kasım 2026, Çarşamba | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-022 | `references/source-documents/Evdeki_Ses_Ekin_Ana_Program_Akisi_AYRINTILI_Calisma_Versiyonu_2026-10-03.docx:P413` | 4, 11, 18, 25 Kasım; 2 ve 9 Aralık | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-023 | `references/source-documents/Evdeki_Ses_Ekin_Ana_Program_Akisi_AYRINTILI_Calisma_Versiyonu_2026-10-03.docx:P421` | 3 Kasım 2026, 23.59 | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-024 | `references/source-documents/Evdeki_Ses_Ekin_Toplantisi_Karar_ve_Aksiyon_Listesi_2026-10-03.docx:P61` | Program başlangıcı: 4 Kasım 2026 | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-025 | `references/source-documents/Evdeki_Ses_Ekin_Toplantisi_Karar_ve_Aksiyon_Listesi_2026-10-03.docx:P63` | Canlı tarihler: 4, 11, 18, 25 Kasım; 2 ve 9 Aralık | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-026 | `references/source-documents/Evdeki_Ses_Ekin_Toplantisi_Karar_ve_Aksiyon_Listesi_2026-10-03.docx:P66` | Kayıt kapanışı: 3 Kasım 2026, 23.59 | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-027 | `references/source-documents/Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx:P133` | Başlangıç: 4 Kasım 2026, Çarşamba | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-028 | `references/source-documents/Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx:P138` | 4 Kasım · 11 Kasım · 18 Kasım · 25 Kasım · 2 Aralık · 9 Aralık | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-029 | `references/source-documents/Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx:P141` | Kayıtlar 3 Kasım 2026, 23.59’da kapanıyor. | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-030 | `references/source-documents/Evdeki_Ses_Landing_Page_FINAL_2026-10-03.docx:P168` | 4 Kasım’da başlıyoruz. | Tarihsel kaynak; etkin takvim diye kullanma |
| DATE-031 | `revision/references/nilufer-feedback-2026-10-14.md:L49` | Kapanıştaki ve Pratik Bilgiler’deki “4 Kasım’da başlıyoruz” → “11 Kasım’da başlıyoruz” | Tarihsel feedback; değiştirme, DEC-019 ile yorumla |
| DATE-032 | `revision/references/readability-feedback.md:L12` | Final “Ne zamandır ‘bir gün’ diyorsun? / 4 Kasım’da başlıyoruz” ekranının yapısı çalışıyor. | Tarihsel feedback; değiştirme, DEC-019 ile yorumla |
| DATE-033 | `revision/references/readability-feedback.md:L124` | Şu anda landing 4 Kasım gösteriyor; 11 Kasım’a kaydırma ihtimali var. | Tarihsel feedback; değiştirme, DEC-019 ile yorumla |
| DATE-PDF24-A | PDF s.24 başlangıç | 4 Kasım 2026 | SUPERSEDED → DEC-019; PDF aslı korunur |
| DATE-PDF24-B | PDF s.24 kayıt kapanışı | 3 Kasım 2026 23.59 | SUPERSEDED → DEC-019 |
| DATE-PDF24-C | PDF s.24 altı buluşma listesi | 4 Kasım … 9 Aralık | SUPERSEDED → DEC-019; 16 Aralık eklenecek |
| DATE-PDF25 | PDF s.25 kapanış | 4 Kasım’da başlıyoruz. | SUPERSEDED → 11 Kasım’da başlıyoruz. |

## Global kurallar / sahip ve kontrol noktası

Sahip sütunu sonraki çalışma için görev paylaşımıdır; bu tur Antigravity’ye görev gönderilmedi. Ekin içerik/ürün kararlarını ve varlıkları; Ekin+Work tasarım incelemesini; Antigravity ileride ayrıca yetkilendirilince uygulama/QA kanıtını sağlar.

| ID | Kural | Durum | Sahip / uygulama checkpointi | Kabul | Kaynak |
|---|---|---|---|---|---|
| G-01 | Web arayüzü tipografi sistemi | CONFIRMED: tek ana font Plus Jakarta Sans; SF ve NB International aktif hedef değil; Newsletter serif ayrı gelecek onaya bağlı; Hero el yazısı/özel marka grafikleri istisna; Nilüfer Ormanlı logosu sistem dışı | Ekin + Work / Antigravity | VR-READ | F12-L014,015,023,066,083; DEC-028; GCH-001 |
| G-02 | Satır/paragraf aralığı | CONFIRMED | Ekin + Work / Antigravity | VR-READ | F12-L016,017,041,047,072 |
| G-03 | Metin sütunu / fiziksel alan | CONFIRMED; 50–70 karakter rehber | Ekin + Work / Antigravity | VR-READ | F12-L018,040,065 |
| G-04 | Başlık/body hiyerarşisi | CONFIRMED | Ekin + Work / Antigravity | VR-READ | F12-L020,021,073 |
| G-05 | Koyu zeminde kontrast | CONFIRMED | Ekin + Work / Antigravity | VR-READ | F12-L019,022,050 |
| G-06 | Fotoğraf overlay okunabilirliği | CONFIRMED | Ekin + Work / Antigravity | VR-IMAGE | F12-L019,036,050; PDF |
| G-07 | Responsive/mobil sıra | CONFIRMED davranış; test genişlikleri PROPOSED | Ekin + Work / Antigravity | VR-READ, VR-HERO | F12-L032; kullanıcı Task 3 |
| G-08 | scroll-snap / 100vh erişilebilirlik | CONFIRMED erişim hedefi; çözüm REVIEW | Antigravity / Ekin QA | VR-READ | CSS L97, L1557–1565, L2003–2011; kullanıcı Task 3 |
| G-09 | Navigasyon ve CTA | CONFIRMED; checkout URL PENDING | Ekin operasyon / Antigravity | VR-CTA | F12-L055–058,L104; TECH-001/002/003 |
| G-10 | FAQ eşlemesi / merkez erişim | Eşleme CONFIRMED; sunum PENDING | Ekin + Work / Antigravity | VR-FAQ | F12-L052,119–121; DEP-013 |
| G-11 | Canlı Destek çakışması | CONFIRMED; gerçek davranış PENDING | Ekin ürün / Antigravity | VR-SUPPORT | F12-L122; F14-L039; DEP-012 |
| G-12 | Görsel kalite, lisans, filigran | CONFIRMED; temiz dosyalar PENDING | Ekin görsel / Antigravity QA | VR-IMAGE | F12-L043–044,049,112–117; F14-L035,038 |
| G-13 | Metin bütünlüğü | CONFIRMED | Ekin + Work / Antigravity | VR-COPY | 01_PUBLIC_COPY; açık F14 değişiklikleri; PDF-003/004/005 |
| G-14 | SEO ve paylaşım metası | Description CONFIRMED; paylaşım varlıkları PENDING | Ekin yayın / Antigravity | VR-META | F14-L042; DEP-021 |
| G-15 | Hukuk ve checkout | Talep CONFIRMED; koşullar PENDING | Ekin + yetkili hukuk/ödeme / Antigravity | VR-LEGAL, VR-PAYMENT | 03_PRODUCTION_STATUS; F14-L032,034,044,045 |
| G-16 | Takvim tutarlılığı | CONFIRMED | Ekin kaynak / Antigravity QA | VR-DATE | F14-L046–049 + doğrudan kullanıcı tarih override |

Web arayüzünün tek ana fontu **Plus Jakarta Sans**. **SF** ve **NB International** artık kullanılmayacak. **Newsletter serif** aktif sistem parçası değildir; yalnız ileride ayrıca onaylanırsa eklenebilir. Hero’daki el yazısı ve özel marka grafikleri şimdilik korunur; **Nilüfer Ormanlı logosu tipografi sisteminin parçası değildir** ve logo varlığı ikinci bir arayüz fontu sayılmaz.

Yoğun metinli ekranlarda test edilen referans:
- Başlık: 30px / 38px
- Gövde: 18px / 28px
- Paragraf aralığı: 18px
- Başlık-gövde aralığı: 16px

Bu değerler tüm siteye zorunlu tek ölçek olarak dayatılmaz; mevcut tasarım hiyerarşisi korunarak uygulanır. Brifteki 19–20px gövde önerisi yeni bir standart olarak kabul edilmez.

Kapsam ve Uygulama Sınırı (18 Ekim 2026):
1. Global font değişikliği uygulanır (Plus Jakarta Sans ana font; SF ve NB International kaldırılır; Newsletter serif onay şartlı; Hero el yazısı ve Nilüfer Ormanlı logosu istisna).
2. Yalnızca SEC-16–19 Program bölümü 10 kartlık tıklamasız birleşik sistem olarak yeniden oluşturulur. 10 kartlık grid görsel onaya sunulur; bu aşamada Program grid'inin görünümü nihai onaylanmış tasarım olarak kaydedilmez.
3. Diğer bölümlerde font değişiminden kaynaklanan satır kırılması, taşma veya yerleşim sorunları tespit edilip raporlanır; diğer bölümlerin tasarımı kendiliğinden değiştirilmez.

## 12 Ekim — eksiksiz kaynak envanteri

Kaynak F12: [readability-feedback.md](references/readability-feedback.md). Satır numaralı bağlantı asıl tam ifadeyi taşır; özet işlem yeni kamu kopyası değildir. Birden çok kez geçen talep de kendi satır kimliğiyle korunur. Her satırın kabul kodunun ayrıntısı DESIGN_HANDOFF içindedir.

| ID | Kaynak / konum | Etkilenen bölüm | Gerekli işlem | Öncelik* | Karar durumu | DESIGN | CODE | Kabul kontrolü | Bağımlılık |
|---|---|---|---|---|---|---|---|---|---|
| F12-L004 | [F12:L4](references/readability-feedback.md#L4) | GLOBAL | Genel sinematik dünyayı koru; her ekranı zorunlu koyuya çevirme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-VISUAL | DEP-016 |
| F12-L005 | [F12:L5](references/readability-feedback.md#L5) | SEC-09–15 / CMP-02 | 00–06 navigasyonu, ayrı hafta görselleri ve output yapısını koru. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L006 | [F12:L6](references/readability-feedback.md#L6) | SEC-02 | “Bir gün dediğin şey hayatında yok değil” bölümü çalışıyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-INTRO | DEP-016 |
| F12-L007 | [F12:L7](references/readability-feedback.md#L7) | SEC-03 | “Belki başladın…” ekranındaki el yazılı müdahalelerin fikri çalışıyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RECOG | DEP-014 |
| F12-L008 | [F12:L8](references/readability-feedback.md#L8) | SEC-04 | “Bu kez yalnızca sonuca değil, olurken ne olduğuna da kulak veriyoruz” güçlü bir statement. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-VISUAL | DEP-016 |
| F12-L009 | [F12:L9](references/readability-feedback.md#L9) | SEC-05 | “Ve yaptığın şey senden çıkar” güçlü bir statement. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-COPY | DEP-018 |
| F12-L010 | [F12:L10](references/readability-feedback.md#L10) | SEC-20 | Metronomlu Programın Ritmi görsel fikri iyi. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RHYTHM | DEP-020 |
| F12-L011 | [F12:L11](references/readability-feedback.md#L11) | SEC-22 | Nilüfer bölümündeki davullu fotoğraf, bütün akış içinde hareket, beden ve ses tarafını taşıyor; korunabilir. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-BIO | DEP-015,DEP-017 |
| F12-L012 | [F12:L12](references/readability-feedback.md#L12) | SEC-24 | PARTIAL: yalnız eski tarih; kapanış yapısı korunur; SUP-08. | P1 | PARTIAL: yalnız eski tarih; kapanış yapısı korunur | REVIEW | OLD / NOT_IMPLEMENTED | VR-DATE | — |
| F12-L014 | [F12:L14](references/readability-feedback.md#L14) | GLOBAL / SEC-01–24 | Body okunabilirliğini gözle ve ölçerek incele; yalnız başlık okunmasını yeterli sayma. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L015 | [F12:L15](references/readability-feedback.md#L15) | GLOBAL / SEC-01–24 | Body font size belirgin biçimde büyümeli. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L016 | [F12:L16](references/readability-feedback.md#L16) | GLOBAL / SEC-01–24 | Line-height artırılmalı. Metin bloklarının nefes alması gerekiyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L017 | [F12:L17](references/readability-feedback.md#L17) | GLOBAL / SEC-01–24 | Paragraflar ve bloklar arasındaki spacing artırılmalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L018 | [F12:L18](references/readability-feedback.md#L18) | GLOBAL / SEC-01–24 | Metin için fiziksel alan aç; sığdırmak için font küçültme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L019 | [F12:L19](references/readability-feedback.md#L19) | GLOBAL / SEC-01–24 | Koyu fotoğraflar üzerindeki gri/secondary body text fazla sönük. Biraz daha açık/parlak olmalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L020 | [F12:L20](references/readability-feedback.md#L20) | GLOBAL / SEC-01–24 | SEC-04 ve SEC-05 statement/body ölçek farklarını dengele. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L021 | [F12:L21](references/readability-feedback.md#L21) | GLOBAL / SEC-01–24 | Büyük başlıkların büyük olması doğru; ama bazıları bir miktar küçülürken body büyürse hiyerarşi daha dengeli olur. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L022 | [F12:L22](references/readability-feedback.md#L22) | SEC-03 | SEC-03 el yazısı kontrastını artır. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RECOG | DEP-014 |
| F12-L023 | [F12:L23](references/readability-feedback.md#L23) | SEC-09–15 / CMP-02 | SEC-09–15 body, harf ve satır aralıklarını birlikte kontrol et. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L025 | [F12:L25](references/readability-feedback.md#L25) | SEC-01 | Yeni hero yönü mevcut olandan daha karakterli. Fotoğraf ve soldaki “bir gün” cümleleri kullanılabilir. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F12-L026 | [F12:L26](references/readability-feedback.md#L26) | SEC-01 | Sağ tarafta fazla sayıda tipografik karakter aynı anda konuşuyor. Sadeleşmeli. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F12-L027 | [F12:L27](references/readability-feedback.md#L27) | SEC-01 | SUPERSEDED: hero format katmanı kaldırılır; SUP-01. | P1 | SUPERSEDED: hero format katmanı kaldırılır | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | DEP-008,DEP-015,DEP-016 |
| F12-L028 | [F12:L28](references/readability-feedback.md#L28) | SEC-01,GLOBAL CTA | “Kayıt ol” → “Evdeki Ses’e Katıl.” | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | — |
| F12-L029 | [F12:L29](references/readability-feedback.md#L29) | SEC-01 | SUPERSEDED: format etiketi SEC-02’ye taşınır; SUP-01. | P1 | SUPERSEDED: format etiketi SEC-02’ye taşınır | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | DEP-008,DEP-015,DEP-016 |
| F12-L030 | [F12:L30](references/readability-feedback.md#L30) | SEC-01 | Teklif açıklamasını SEC-02’de doğrula; F14 hero sadeleştirmesini ihlal etme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F12-L031 | [F12:L31](references/readability-feedback.md#L31) | SEC-01 | SUPERSEDED: altı hafta ibaresiz F14-L007; SUP-02. | P1 | SUPERSEDED: altı hafta ibaresiz F14-L007 | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | DEP-008,DEP-015,DEP-016 |
| F12-L032 | [F12:L32](references/readability-feedback.md#L32) | SEC-01 | Sol örnekler sonuç cümlesinden önce; mobil okuma sırasını da doğrula. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F12-L033 | [F12:L33](references/readability-feedback.md#L33) | SEC-01 | Hero sofistike kalmalı ama “sanat projesi afişi”ne dönüşmemeli. Tatlı bir satış dili gerekiyor. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F12-L035 | [F12:L35](references/readability-feedback.md#L35) | SEC-03 | Kullanılan görsel Nilüfer’e oturmuyor; değiştirilecek. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RECOG | DEP-014 |
| F12-L036 | [F12:L36](references/readability-feedback.md#L36) | SEC-03 | El yazısı cümlelerin kontrastı ciddi biçimde artırılmalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RECOG | DEP-014 |
| F12-L037 | [F12:L37](references/readability-feedback.md#L37) | SEC-03 | Biraz daha araştırdın.. metnini tek noktayla düzelt. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RECOG | DEP-014 |
| F12-L039 | [F12:L39](references/readability-feedback.md#L39) | SEC-08 / GLOBAL images | SEC-08’de sıkışıklığı gider; tüm metin kalacak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F12-L040 | [F12:L40](references/readability-feedback.md#L40) | SEC-08 / GLOBAL images | İki sütunlu düzen daha ferah hale getirilmeli. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F12-L041 | [F12:L41](references/readability-feedback.md#L41) | SEC-08 / GLOBAL images | Body büyümeli ve daha fazla spacing almalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F12-L042 | [F12:L42](references/readability-feedback.md#L42) | SEC-08 / GLOBAL images | “Bir şeyin tesiri, yalnızca ne söylediğinde değil, nereden söylediğinde saklıdır.” sayfanın önemli tipografik anlarından biri olmalı. Şu an gücü tasarımda yeterince görünmüyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F12-L043 | [F12:L43](references/readability-feedback.md#L43) | SEC-08 / GLOBAL images | En az bir uygun görselde ses/müzik pratiği açıkça algılansın. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F12-L044 | [F12:L44](references/readability-feedback.md#L44) | SEC-08 / GLOBAL images | Ses/müzik görseli ekle; bütün sayfayı müzik repertuvarına çevirme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F12-L046 | [F12:L46](references/readability-feedback.md#L46) | SEC-09–15 / CMP-02 | Büyük ölçüde korunacak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L047 | [F12:L47](references/readability-feedback.md#L47) | SEC-09–15 / CMP-02 | Body büyütilecek ve nefes alacak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L048 | [F12:L48](references/readability-feedback.md#L48) | SEC-09–15 / CMP-02 | Altı haftanın output cümlelerinin ilk harfini büyüt; kalan kelimeleri değiştirme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L049 | [F12:L49](references/readability-feedback.md#L49) | SEC-12 | Filigranlı görseli lisanslı temiz asıl dosyayla veya yeni lisanslı görselle değiştir; filigranı rötuşla silme. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-008 |
| F12-L050 | [F12:L50](references/readability-feedback.md#L50) | SEC-09–15 / CMP-02 | Final hafta görselleri üzerinde aktif/pasif sağ navigasyon kontrastını kontrol et. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L051 | [F12:L51](references/readability-feedback.md#L51) | SEC-09–15 / CMP-02 | 00 ekranını giriş/overview olarak ayırt etme önerisini gözden geçir; 0. hafta diye sunma. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L052 | [F12:L52](references/readability-feedback.md#L52) | SEC-09–15 / CMP-02 | 7 hafta/giriş FAQ tetikleyicisini doğru 8 cevap havuzuyla karşılaştır. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L053 | [F12:L53](references/readability-feedback.md#L53) | SEC-09–15 / CMP-02 | tek bir şey → ona referansını koru; önerilen alternatif metin henüz otomatik onaylı değil. | P1 | CONFIRMED koruma / PROPOSED alternatif | REVIEW | OLD / NOT_IMPLEMENTED | VR-WEEKS | DEP-008,DEP-013,DEP-016 |
| F12-L055 | [F12:L55](references/readability-feedback.md#L55) | SEC-27 (new) | Sticky CTA’ya ek içerik CTA checkpointini planla. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-CTA | DEP-011 |
| F12-L056 | [F12:L56](references/readability-feedback.md#L56) | SEC-27 (new) | SEC-15 sonu ile birleşik Program arasına SEC-27 CTA yerleştir. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-CTA | DEP-011 |
| F12-L057 | [F12:L57](references/readability-feedback.md#L57) | SEC-27 (new) | Kısa geçiş ve EVDEKİ SES’E KATIL; yeni satış iddiası yazma. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-CTA | DEP-011 |
| F12-L058 | [F12:L58](references/readability-feedback.md#L58) | SEC-27 (new) | CTA checkpointini yolculuk tamamlandıktan sonra konumlandır. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-CTA | DEP-011 |
| F12-L060 | [F12:L60](references/readability-feedback.md#L60) | SEC-16–19 → unified | Eski dört Program panelinin aynı sistem gibi algılanmaması sorununu yeni 10 kartla çöz. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L061 | [F12:L61](references/readability-feedback.md#L61) | SEC-16–19 → unified | Karışık şablon hissini gider. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L062 | [F12:L62](references/readability-feedback.md#L62) | SEC-16–19 → unified | Programın tamamını tek görsel aile olarak ele al. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L063 | [F12:L63](references/readability-feedback.md#L63) | SEC-16–19 → unified | Başlıklarla birlikte body kopyanın da taranabildiğini doğrula. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L064 | [F12:L64](references/readability-feedback.md#L64) | SEC-16–19 → unified | Body metinlerinin atlanmamasını sağlayan okunabilir düzen kur. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L065 | [F12:L65](references/readability-feedback.md#L65) | SEC-16–19 → unified | Köşeye sıkışan Program metinlerine alan aç. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L066 | [F12:L66](references/readability-feedback.md#L66) | SEC-16–19 → unified | Program body ve yerleşimini birlikte aç. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L067 | [F12:L67](references/readability-feedback.md#L67) | SEC-16–19 → unified | PARTIAL: çoklu ekran serbestliği kalktı; görsel akrabalık korunur; SUP-05. | P1 | PARTIAL: çoklu ekran serbestliği kalktı; görsel akrabalık korunur | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L068 | [F12:L68](references/readability-feedback.md#L68) | SEC-16–19 → unified | SUPERSEDED: asistan fotoğrafı yenilenmez, sistemden kalkar; SUP-05. | P1 | SUPERSEDED: asistan fotoğrafı yenilenmez, sistemden kalkar | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | DEP-016 |
| F12-L070 | [F12:L70](references/readability-feedback.md#L70) | SEC-20 | Metronom/videosu iyi, korunmalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RHYTHM | DEP-020 |
| F12-L071 | [F12:L71](references/readability-feedback.md#L71) | SEC-20 | Ritim bölümünün küçük body problemini düzelt. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RHYTHM | DEP-020 |
| F12-L072 | [F12:L72](references/readability-feedback.md#L72) | SEC-20 | Metin büyüyüp nefes almalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RHYTHM | DEP-020 |
| F12-L073 | [F12:L73](references/readability-feedback.md#L73) | SEC-20 | Başlık/body hiyerarşisi biraz güçlendirilmeli. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RHYTHM | DEP-020 |
| F12-L075 | [F12:L75](references/readability-feedback.md#L75) | SEC-21 | Uygunluk kopyasını koru; sunumu iyileştir. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FIT | DEP-016 |
| F12-L076 | [F12:L76](references/readability-feedback.md#L76) | SEC-21 | Uygunlukta görsel enerjiyi sürdür; yeni kopya ekleme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FIT | DEP-016 |
| F12-L077 | [F12:L77](references/readability-feedback.md#L77) | SEC-21 | İzleyen iki cümleyi tasarım ankrajı olarak birlikte ele al. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FIT | DEP-016 |
| F12-L078 | [F12:L78](references/readability-feedback.md#L78) | SEC-21 | “Evdeki Ses’e ne yapmak istediğini bilerek de gelebilirsin, yalnızca içinde bir şeyin biriktiğini bilerek de.” | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FIT | DEP-016 |
| F12-L079 | [F12:L79](references/readability-feedback.md#L79) | SEC-21 | “Buraya bir şeyi yanında taşımaya devam etmek için değil, onunla bir şey yapmak için geliyorsun.” | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FIT | DEP-016 |
| F12-L080 | [F12:L80](references/readability-feedback.md#L80) | SEC-21 | Ortadaki body bunların arasında daha rahat okunabilir. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FIT | DEP-016 |
| F12-L082 | [F12:L82](references/readability-feedback.md#L82) | SEC-22 | Davullu gerçek fotoğraf kalabilir. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-BIO | DEP-015,DEP-017 |
| F12-L083 | [F12:L83](references/readability-feedback.md#L83) | SEC-22 | Biyografi body alanını büyüt ve aç. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-BIO | DEP-015,DEP-017 |
| F12-L084 | [F12:L84](references/readability-feedback.md#L84) | SEC-22 | Daha fazla metnini koru; gerçek URL sağlanınca erişilebilir bağlantı yap (TECH-003). | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-BIO | DEP-015,DEP-017 |
| F12-L085 | [F12:L85](references/readability-feedback.md#L85) | SEC-22 | Güven işlevini mevcut biyografi kopyasıyla taşı; yeni uzmanlık/başarı iddiası yazma. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-BIO | DEP-015,DEP-017 |
| F12-L087 | [F12:L87](references/readability-feedback.md#L87) | SEC-26 (new) | Dört testimonial kartını Nilüfer’den hemen sonra, Pratik Bilgiler’den önce yerleştir. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L088 | [F12:L88](references/readability-feedback.md#L88) | SEC-26 (new) | Başlık örneği: “Yıllar içinde birlikte çalıştığım kişilerden”. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L089 | [F12:L89](references/readability-feedback.md#L89) | SEC-26 (new) | Önceki çalışma yorumlarını Evdeki Ses sonucu gibi gösterme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L090 | [F12:L90](references/readability-feedback.md#L90) | SEC-26 (new) | Her kartta ilk isim ve kısa çalışma bağlamı bulunacak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L091 | [F12:L91](references/readability-feedback.md#L91) | SEC-26 (new) | PARTIAL: 3–5 aralığı kalktı; dört kart kesin; SUP-07. | P1 | PARTIAL: 3–5 aralığı kalktı; dört kart kesin | REVIEW | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L092 | [F12:L92](references/readability-feedback.md#L92) | SEC-26 (new) | PARTIAL: isimler korunur; Matilde bu dört kartlık seçkiye eklenmez; SUP-07. | P1 | PARTIAL: isimler korunur; Matilde bu dört kartlık seçkiye eklenmez | REVIEW | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L093 | [F12:L93](references/readability-feedback.md#L93) | SEC-26 (new) | İsimle web kullanım izinlerinin kanıtını Ekin’den teyit et; sürecin sürmesini izin tamamlandı sayma. | P1 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F12-L095 | [F12:L95](references/readability-feedback.md#L95) | SEC-23 / SEC-28 (new) | Pratik bilgi/fiyat temel yapısını referans olarak koru; yeni içeriğe yer aç. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L096 | [F12:L96](references/readability-feedback.md#L96) | SEC-23 / SEC-28 (new) | Podcast mikrofonlu stock kadın görseli değişmeli. Landing’in bu kadar ilerisine geldikten sonra marka dünyasını kırıyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L097 | [F12:L97](references/readability-feedback.md#L97) | SEC-23 / SEC-28 (new) | PARTIAL: özgün nesne alternatifi yerine gönderilecek Nilüfer fotoğrafı; SUP-10. | P1 | PARTIAL: özgün nesne alternatifi yerine gönderilecek Nilüfer fotoğrafı | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L098 | [F12:L98](references/readability-feedback.md#L98) | SEC-23 / SEC-28 (new) | 15.500 TL mevcut referans; daha yeni fiyat onayı gelmedikçe değiştirme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L099 | [F12:L99](references/readability-feedback.md#L99) | SEC-23 / SEC-28 (new) | Ekin’den 3 taksit altyapısının mümkün olup olmadığı netleştirilecek. | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L100 | [F12:L100](references/readability-feedback.md#L100) | SEC-23 / SEC-28 (new) | Mümkünse 3× seçeneği eklenmesi fiyat bariyerini azaltabilir. | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L101 | [F12:L101](references/readability-feedback.md#L101) | SEC-23 / SEC-28 (new) | Değer özeti önerisi F14-L033 ile kesin metne dönüştü; metni aynen eşle. | P1 | CONFIRMED via F14-L033 | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L102 | [F12:L102](references/readability-feedback.md#L102) | SEC-23 / SEC-28 (new) | Soru/iletişim için ikinci kapı ekle; ana satın alma yolunu değiştirme. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L103 | [F12:L103](references/readability-feedback.md#L103) | SEC-23 / SEC-28 (new) | Soru formu alt metnini aynen kullan; gerçek form hedefi DEP-012. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F12-L104 | [F12:L104](references/readability-feedback.md#L104) | GLOBAL CTA | Ana satış yolu doğrudan checkout; başvuru/onay adımı ekleme. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-CTA | DEP-011 |
| F12-L106 | [F12:L106](references/readability-feedback.md#L106) | SEC-23 / checkout | Ekin’den durum sorulacak: | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F12-L107 | [F12:L107](references/readability-feedback.md#L107) | SEC-23 / checkout | İade/cayma araştırması nereye geldi? | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F12-L108 | [F12:L108](references/readability-feedback.md#L108) | SEC-23 / checkout | Mesafeli satış + ön bilgilendirme checkout’ta nasıl çözülecek? | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F12-L109 | [F12:L109](references/readability-feedback.md#L109) | SEC-23 / checkout | Gerekli kısa bilgi fiyat/checkout çevresinde nasıl gösterilecek? | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F12-L110 | [F12:L110](references/readability-feedback.md#L110) | SEC-23 / checkout | Kısa onaylı hukuk bilgisini fiyat yakınında, tam metinleri checkout’ta tut. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F12-L112 | [F12:L112](references/readability-feedback.md#L112) | GLOBAL / SEC-03,12,23 | Bütün final görselleri için kalite, kırpma, lisans ve watermark taraması yap. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-007,DEP-008,DEP-017 |
| F12-L113 | [F12:L113](references/readability-feedback.md#L113) | GLOBAL / SEC-03,12,23 | Podcast stock fotoğrafını F14-L035 Nilüfer görseliyle değiştir. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-007,DEP-008,DEP-017 |
| F12-L114 | [F12:L114](references/readability-feedback.md#L114) | GLOBAL / SEC-03,12,23 | SUPERSEDED: turuncu laptop fotoğrafı kaldırılan panelle birlikte kalkar; SUP-05. | P1 | SUPERSEDED: turuncu laptop fotoğrafı kaldırılan panelle birlikte kalkar | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | DEP-007,DEP-008,DEP-017 |
| F12-L115 | [F12:L115](references/readability-feedback.md#L115) | SEC-12 | Hafta 3 Unsplash+ dosyasında lisans/temiz asıl veya alternatif bekle. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-008 |
| F12-L116 | [F12:L116](references/readability-feedback.md#L116) | GLOBAL / SEC-03,12,23 | Final görsel seçkisine ses/müzik ekle; ilgili kaynakları doğrula. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-007,DEP-008,DEP-017 |
| F12-L117 | [F12:L117](references/readability-feedback.md#L117) | GLOBAL / SEC-03,12,23 | Uygun ve izinli gerçek fotoğrafları stock’a tercih et. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-007,DEP-008,DEP-017 |
| F12-L119 | [F12:L119](references/readability-feedback.md#L119) | SEC-25 / CMP-03 | Açık SSS bölümü mü, merkezi modal mı? Karar bekliyor; tasarımı sessizce kilitleme. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FAQ | DEP-013 |
| F12-L120 | [F12:L120](references/readability-feedback.md#L120) | SEC-25 / CMP-03 | Hafta soruları + final merkezi SSS erişimi olası çözüm; PROPOSED. | P1 | PROPOSED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FAQ | DEP-013 |
| F12-L121 | [F12:L121](references/readability-feedback.md#L121) | SEC-25 / CMP-03 | Her FAQ tetikleyicisinin metni ile açtığı cevap aynı olmalı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FAQ | DEP-013 |
| F12-L122 | [F12:L122](references/readability-feedback.md#L122) | SEC-25 / CMP-03 | Canlı Destek hiçbir body/CTA/FAQ kontrolünü örtmeyecek. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-FAQ | DEP-013 |
| F12-L124 | [F12:L124](references/readability-feedback.md#L124) | SEC-23,24 / all dated sources | SUPERSEDED: tarih ihtimali yerini kesin 11 Kasım’a bıraktı; SUP-08. | P0 | SUPERSEDED: tarih ihtimali yerini kesin 11 Kasım’a bıraktı | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | — |
| F12-L125 | [F12:L125](references/readability-feedback.md#L125) | SEC-23,24 / all dated sources | Tarih, altı buluşma, bitiş, kayıt kapanışı ve tüm CTA tarihlerini birlikte güncelle; DEC-019. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-DATE | — |
| F12-L127 | [F12:L127](references/readability-feedback.md#L127) | GLOBAL head / sharing | Önerilen meta cümlesi F14-L042’de kesinleşti; aynen koru. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-META | DEP-021 |
| F12-L128 | [F12:L128](references/readability-feedback.md#L128) | GLOBAL head / sharing | SUPERSEDED: meta ertelemesi kalktı; F14-L042 kesin; SUP-09. | P1 | SUPERSEDED: meta ertelemesi kalktı; F14-L042 kesin | SUPERSEDED | N/A | Yeni DEC / SUP kontrolü | DEP-021 |
| F12-L130 | [F12:L130](references/readability-feedback.md#L130) | GLOBAL / SEC-01–24 | Sayfa genelinde body text / line-height / spacing / kontrast düzenlemesi. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-READ | DEP-015,DEP-016 |
| F12-L131 | [F12:L131](references/readability-feedback.md#L131) | SEC-01 | Hero’nun yeni yönünü sadeleştirip teklifin ne olduğunu ilk 5 saniyede anlaşılır hale getirmek. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F12-L132 | [F12:L132](references/readability-feedback.md#L132) | SEC-16–19 → unified | “Programın içinde neler var?” bölümünü tek bir görsel aile olarak yeniden kurmak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F12-L133 | [F12:L133](references/readability-feedback.md#L133) | GLOBAL / SEC-03,12,23 | Stock/placeholder görselleri temizlemek ve ses/müzik tarafını görsel repertuvara katmak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-007,DEP-008,DEP-017 |
| F12-L134 | [F12:L134](references/readability-feedback.md#L134) | SEC-27 (new) | 6 haftanın sonuna CTA checkpoint eklemek. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-CTA | DEP-011 |
| F12-L135 | [F12:L135](references/readability-feedback.md#L135) | SEC-26,23,28 | Testimonials + soru/iletişim kapısı + taksit/iade altyapısını fiyat öncesinde güven katmanı olarak tamamlamak. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-006,DEP-009,DEP-010,DEP-012 |

## 14 Ekim — eksiksiz kaynak envanteri

Kaynak F14: [nilufer-feedback-2026-10-14.md](references/nilufer-feedback-2026-10-14.md). Başlık niteliğindeki L46 da kesin tarih kararı olduğu için kayıt sayıldı. L30 başlığı yalnız örnektir; dört isim/kart sayısı kesin, metin/bağlam/izin kaynakları bekleniyor.

| ID | Kaynak / konum | Etkilenen bölüm | Gerekli işlem | Öncelik* | Karar durumu | DESIGN | CODE | Kabul kontrolü | Bağımlılık |
|---|---|---|---|---|---|---|---|---|---|
| F14-L005 | [F14:L5](references/nilufer-feedback-2026-10-14.md#L5) | SEC-01 | Solda “bir gün” listesi | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F14-L006 | [F14:L6](references/nilufer-feedback-2026-10-14.md#L6) | SEC-01 | Sağda: NE ZAMANDIR “BİR GÜN” DİYORSUN? | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F14-L007 | [F14:L7](references/nilufer-feedback-2026-10-14.md#L7) | SEC-01 | Altında: “Bir gün” dediğin şeyi dünyayla buluştur. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F14-L008 | [F14:L8](references/nilufer-feedback-2026-10-14.md#L8) | SEC-01 | EVDEKİ SES küçük bir imza olarak; ayrı bir mesaj gibi değil, afişin altındaki film adı gibi | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F14-L009 | [F14:L9](references/nilufer-feedback-2026-10-14.md#L9) | SEC-01 | Buton: Evdeki Ses’e Katıl | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F14-L010 | [F14:L10](references/nilufer-feedback-2026-10-14.md#L10) | SEC-01 | Hero’da olmayacaklar: sınırlı kontenjan, 10 kişi, 6 hafta, Nilüfer Ormanlı’dan, program tanımı | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-HERO | DEP-008,DEP-015,DEP-016 |
| F14-L012 | [F14:L12](references/nilufer-feedback-2026-10-14.md#L12) | SEC-02 | Sağ üst: “Niyeti var. Malzemesi var. Hazırlığı var. Ama kendisi yok.” (sıra değişti) | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-INTRO | DEP-016 |
| F14-L013 | [F14:L13](references/nilufer-feedback-2026-10-14.md#L13) | SEC-02 | Krem Evdeki Ses kartının tepesine turuncu, küçük etiket: 6 HAFTA · HER ÇARŞAMBA · EN FAZLA 10 KİŞİ | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-INTRO | DEP-016 |
| F14-L014 | [F14:L14](references/nilufer-feedback-2026-10-14.md#L14) | SEC-02 | Karttaki ikinci cümle: “Sende canlı olan yerden başlıyor, onunla çalışıyor ve program bitmeden ona biçim verip dünyayla buluşturuyorsun.” | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-INTRO | DEP-016 |
| F14-L016 | [F14:L16](references/nilufer-feedback-2026-10-14.md#L16) | SEC-16–19 → unified | Uzun fotoğraflı paneller yerine tek bakışta görülen 10 kart. Tıklama yok; grid senin kararın — önemli olan 10 kartın birlikte bir sistem gibi algılanması. Fotoğrafa gerek yok, stok görsel sorunu da böylece çözülüyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L017 | [F14:L17](references/nilufer-feedback-2026-10-14.md#L17) | SEC-16–19 → unified | Kartların üstündeki giriş cümlesi: Program boyunca seçtiğin şeyin başına tekrar tekrar dönüyorsun. Bunun için haftada en az 45 dakika ayırmanı öneriyoruz. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L018 | [F14:L18](references/nilufer-feedback-2026-10-14.md#L18) | SEC-16–19 → unified | Haftalık canlı buluşmalar — Her Çarşamba 2 saat birlikteyiz. Haftanın malzemesini buraya getiriyor; sesle, sözle ve yaptığın şeyin kendisiyle çalışıyoruz. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L019 | [F14:L19](references/nilufer-feedback-2026-10-14.md#L19) | SEC-16–19 → unified | Haftanın dersi — Her hafta, o haftanın çalışmasını açan kayıtlı bir video ders. Neye kulak vereceğimizi ve bunun yaptığın şeyle ilişkisini burada kuruyoruz. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L020 | [F14:L20](references/nilufer-feedback-2026-10-14.md#L20) | SEC-16–19 → unified | Günlük Akort — Her gün 8–10 dakikalık rehberli bir ses kaydı. İçeride hareket edeni yeniden duyabileceğin küçük bir temas alanı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L021 | [F14:L21](references/nilufer-feedback-2026-10-14.md#L21) | SEC-16–19 → unified | Rehberli pratikler — Ses, nefes, beden, hareket ve imgeyle çalışan yaklaşık 15 dakikalık pratikler. Video ya da ses kaydı olarak, kendi zamanında. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L022 | [F14:L22](references/nilufer-feedback-2026-10-14.md#L22) | SEC-16–19 → unified | Haftanın araştırmaları — Hafta boyunca yanında taşıyacağın küçük yazılı araştırmalar. Gördüğünü, duyduğunu ve denediğini üzerinde çalıştığın şeye taşıyorsun. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L023 | [F14:L23](references/nilufer-feedback-2026-10-14.md#L23) | SEC-16–19 → unified | Workbook ve Yaratıcı Ses Haritası — Her haftanın sorularını, fark ettiklerini ve kararlarını taşıyan çalışma materyalleri. Altı haftanın sonunda burada biriken izler, kendi yaratım sürecine dönüp bakabileceğin kişisel Yaratıcı Ses Haritana dönüşüyor. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L024 | [F14:L24](references/nilufer-feedback-2026-10-14.md#L24) | SEC-16–19 → unified | Partner çalışması — Her hafta partnerinle 20–25 dakika buluşuyor, yaptığın şeyi paylaşıyor ve onda ne kaldığını duyuyorsun. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L025 | [F14:L25](references/nilufer-feedback-2026-10-14.md#L25) | SEC-16–19 → unified | Evdeki Ses asistanı — Programın çalışma biçimiyle kurulmuş kişisel bir yapay zekâ alanı. Canlı buluşmaların arasında kaldığın yerden işe girmek için. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L026 | [F14:L26](references/nilufer-feedback-2026-10-14.md#L26) | SEC-16–19 → unified | Proje Tezgâhı — İşin biçim kazanmaya başladığında canlı buluşmaların bir bölümü tezgâha dönüşüyor. Kameralar açık, mikrofonlar kapalı, herkes kendi işinin başında. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L027 | [F14:L27](references/nilufer-feedback-2026-10-14.md#L27) | SEC-16–19 → unified | Oyun Alanı — Her hafta isteğe bağlı birkaç davet. Kendi malzemene sesle, hareketle, nesnelerle ya da küçük ritüellerle başka bir yerden yaklaşmak için. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PROGRAM | DEP-016 |
| F14-L028 | [F14:L28](references/nilufer-feedback-2026-10-14.md#L28) | SEC-20 | Kartların altında “Programın ritmi” metronom görseliyle olduğu gibi kalsın. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RHYTHM | DEP-020 |
| F14-L030 | [F14:L30](references/nilufer-feedback-2026-10-14.md#L30) | SEC-26 (new) | Dört kart: Aslınur, Esma, Ceren, Özge; ilk isim + bağlam; başlık PROPOSED; gerçek metin ve izin kanıtı PENDING. | P1 | CONFIRMED | WAIT_SOURCE / REVIEW structure | OLD / NOT_IMPLEMENTED | VR-TESTIMONIAL | DEP-006 |
| F14-L032 | [F14:L32](references/nilufer-feedback-2026-10-14.md#L32) | SEC-23 / checkout | 3 taksit talebi var; Kartra teknik imkânı, maliyet ve tutarlar UNVERIFIED; yayımlama. | P1 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-PAYMENT | DEP-009 |
| F14-L033 | [F14:L33](references/nilufer-feedback-2026-10-14.md#L33) | SEC-23 / SEC-28 (new) | Fiyatın yanında tek cümlelik değer özeti: 6 hafta boyunca canlı buluşmalar, günlük ve haftalık rehberli çalışmalar, kendi malzemen üzerinde çalışma, partner desteği ve Evdeki Ses asistanıyla birlikte ilerliyorsun. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-PRACTICAL | DEP-007,DEP-009,DEP-010,DEP-011,DEP-012 |
| F14-L034 | [F14:L34](references/nilufer-feedback-2026-10-14.md#L34) | SEC-23 / checkout | Onaylı tek satır iade/cayma özeti ve checkout metinleri PENDING; hukuki metin uydurma. | P1 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F14-L035 | [F14:L35](references/nilufer-feedback-2026-10-14.md#L35) | SEC-23 | Podcast iki kadın görselini gönderilecek gerçek Nilüfer fotoğrafıyla değiştir; dosya PENDING. | P1 | CONFIRMED | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-007 |
| F14-L037 | [F14:L37](references/nilufer-feedback-2026-10-14.md#L37) | SEC-03 | “Biraz daha araştırdın..” → tek nokta | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-RECOG | DEP-014 |
| F14-L038 | [F14:L38](references/nilufer-feedback-2026-10-14.md#L38) | SEC-12 | Hafta 3 filigranını lisanslı temiz asıl dosya veya yeni lisanslı görselle çöz. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-IMAGE | DEP-008 |
| F14-L039 | [F14:L39](references/nilufer-feedback-2026-10-14.md#L39) | CMP-03 / SEC-09–22 | Canlı Destek balonu metnin üstüne biniyor | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SUPPORT | DEP-012 |
| F14-L040 | [F14:L40](references/nilufer-feedback-2026-10-14.md#L40) | SEC-08 / GLOBAL images | Ses bölümü sıkışık iki sütun olarak kalmış, biraz daha ferah olsun. “Bir şeyin tesiri, yalnızca ne söylediğinde değil, nereden söylediğinde saklıdır.” cümlesi vurgulansın. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-SOUND | DEP-017 |
| F14-L042 | [F14:L42](references/nilufer-feedback-2026-10-14.md#L42) | GLOBAL head / sharing | İçinde uzun zamandır taşıdığın şeyi dünyaya çıkar. Nilüfer Ormanlı ile 6 haftalık canlı grup programı. | P1 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-META | DEP-021 |
| F14-L044 | [F14:L44](references/nilufer-feedback-2026-10-14.md#L44) | SEC-23 / checkout | Ekin’den iade/cayma araştırmasının güncel yanıtını ve onaylı metni al. | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-LEGAL | DEP-010,DEP-019 |
| F14-L045 | [F14:L45](references/nilufer-feedback-2026-10-14.md#L45) | SEC-23 / checkout | Ekin Kartra’da 3 taksit uygulanabilirliğini ve ödeme tutarlarını doğrulasın. | P0 | PENDING | WAIT_SOURCE | OLD / NOT_IMPLEMENTED | VR-PAYMENT | DEP-009 |
| F14-L046 | [F14:L46](references/nilufer-feedback-2026-10-14.md#L46) | SEC-23,24 / all dated sources | 11 Kasım 2026 başlangıcı CONFIRMED; DEC-019 uygulanacak. | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-DATE | — |
| F14-L047 | [F14:L47](references/nilufer-feedback-2026-10-14.md#L47) | SEC-23,24 / all dated sources | Canlı buluşmalar: 11, 18, 25 Kasım · 2, 9, 16 Aralık — her Çarşamba 19.30–21.30 | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-DATE | — |
| F14-L048 | [F14:L48](references/nilufer-feedback-2026-10-14.md#L48) | SEC-23,24 / all dated sources | Kayıtlar 10 Kasım 2026, 23.59’da kapanıyor | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-DATE | — |
| F14-L049 | [F14:L49](references/nilufer-feedback-2026-10-14.md#L49) | SEC-23,24 / all dated sources | Kapanıştaki ve Pratik Bilgiler’deki “4 Kasım’da başlıyoruz” → “11 Kasım’da başlıyoruz” | P0 | CONFIRMED | REVIEW | OLD / NOT_IMPLEMENTED | VR-DATE | — |

## Kapsam denetimi

| Kontrol | Sonuç / sınır |
|---|---|
| 12 Ekim bütün gövde ve özet satırları | 114/114 kayıt; L1–2 kaynak kimliği; L3,13,24,34,38,45,54,59,69,74,81,86,94,105,111,118,123,126 bölüm başlığı; L129 özet başlığı |
| 14 Ekim bütün karar satırları | 38/38 kayıt; L1–3 kaynak kimliği/giriş; L4,11,15,29,31,36,41,43 bölüm başlığı; L46 dahil |
| Illustrator | 25/25 görsel incelendi ve SECTION_TRACKER’da eşli; PDF12 iki anotasyon ayrıca PDF-001/002 |
| Mevcut akış | 24/24 eşli; header, tracker, FAQ, destek ve QA yardımcı kodu ayrı bileşen tablosunda |
| Global kurallar | 16/16 sahip/checkpoint ve kabul koduyla |
| Eski kararlar | 10 SUPERSEDED grubu; eski alternatifler aktif karara dönüşmüyor |
| Eksik kaynaklar | Zorunlu dokuz kaynak mevcut; final varlıklar ve açık kararlar DEP-006–024 içinde; eksik veri tamamlandı sayılmadı |
| Uygulama doğrulaması | Bu faz statik okuma + PDF incelemesi; tarayıcı/ödeme/klavye testleri yapılmadı, bug varsayımları kanıtlı gözlemden ayrıldı |

## Çalışma geçmişi / senkronizasyon

R0001: erişim, başlangıç envanteri ve beş takip dosyası hazırlandı; Ekin bunları manuel kopyaladı. R0002: kaynaklar konsolide edildi; 26 takip satırının gerçek akıştaki 24 bölüm + FAQ bileşeni + henüz olmayan testimonial ayrımı düzeltildi; eski SEC kimlikleri korundu.

REV-001 F14 kaynak çıkarımı: COMPLETE (38 kayıt). REV-002 PDF eşlemesi: COMPLETE (25 sayfa); .ai/bağımsız varlık ve onaylar bekliyor. REV-003 üç kaynak fark envanteri: COMPLETE, açık kararlar DEP’de. REV-004 uygulama handoff’u: PENDING; yalnız review hazırlığı mevcut. Kaynak envanterinin tamamlanması final tasarım/uygulamanın tamamlandığı anlamına gelmez.

R0001 tarihi Git bilgileri yalnız geçmiş referansı: origin https://github.com/ekinyasa/evdekises-v2.git; main; HEAD 819ac345cb5313a99f18f59c3c9c83d1bdd3ffb2; assets/.DS_Store ve references/.DS_Store önceki değişiklikler. Bu fazda Git okunmadı/çalıştırılmadı; güncel dal/uzak durum iddiası yok. CODE/CSS/JS başlangıç hashleri yukarıda R0001 ile aynı.

ChatGPT sources aynası salt okunurdur; asıl proje revision klasörüyle otomatik eşitlenmez. Yerel yol tercih edilir; GitHub ancak ayrı yetkili sürümleme, yükleme ancak tarihli snapshot katmanıdır. Oturum başlangıcında dosyaları diskten yeniden oku; sonunda değişen kayıtları/bağımlılıkları yaz; paralel kopya düzenleme yapma.


# R0003 — Revision System Hardening

16 Ekim 2026. Bu ek kaynak konsolidasyonunu tekrarlamaz; önceki altı PARTIAL/FAIL bulgusunu operasyonel kuralla kapatır. R0002’deki 152 özgün kaynak satırı aynen korunmuştur; kaynak kopyası ve tasarım ölçüsü üretilmemiştir. Eski REVIEW etiketleri başlangıç notudur; geçerli bölüm durumları ve kapanış yetkisi SECTION_TRACKER R0003 alanıdır.

## R0003 — Operasyonel kapanış kapısı

Bu bölüm, eski REVIEW/OLD özetlerinin üstündeki geçerli işlem kuralıdır. Kaynak envanteri yeniden konsolide edilmedi; 152 kaynak satırı, 25 PDF eşlemesi ve 10 SUPERSEDED grubu korunur.

### İki ayrı kilometre taşı

1. **DESIGN APPROVED:** Bu bölümün 27 DESIGN kontrolünün her biri PASS veya gerekçeli/onaylı NOT APPLICABLE; bölümün aktif feedbackinin DESIGN karşılıkları çözülmüş; gerekli tasarım kararları onaylı; tasarımı gerçekten etkileyen bağımlılıklar kapalı veya geçerli kapsam dışı erteleme kaydı var; Ekin tasarım sürümünü açıkça onaylamış. CODE testleri bu kilometre taşının yerine geçmez ve tasarım onayı için yapılmış gibi gösterilmez.
2. **CODE VERIFIED:** 27 CODE kontrolü PASS veya gerekçeli/onaylı NOT APPLICABLE; aktif ilgili feedbackin CODE karşılıkları çözülmüş; DESIGN APPROVED sürümüyle eşleşme; gereken karar ve bağımlılıklar kapalı/geçerli ertelemeli; gerçek uygulama ve tarayıcı test kanıtı mevcut; geçerli global sürümler kontrol edilmiş; açık hedefli recheck kalmamış; Ekin son uygulamayı onaylamış.

Applicable bir kontrolde FAIL, BLOCKED veya NOT TESTED varsa ilgili kilometre taşı **GEÇEMEZ**. Boş durum, kanıtsız PASS, gerekçesiz NOT APPLICABLE, onaysız karar veya adı/tarihi/sürümü olmayan Ekin onayı da geçersizdir. Bir bölüme doğrudan VERIFIED yazmak bu kapıyı atlatamaz; GATE satırı ve aşağıdaki kanıt kayıtları uyumsuzsa doğrulayıcı sonuç **NOT VERIFIED** kabul eder.

### Kayıt ve karar koşulları

- Kontrol anahtarı: SEC-xx.DESIGN.A1 veya SEC-xx.CODE.A1. Her bölüm/faz için tek yetkili sonuç A–F matrisindeki hücredir. Sonuçlar yalnız **PASS / FAIL / BLOCKED / NOT APPLICABLE / NOT TESTED**. Eski checklist VR kodları açıklayıcı kabul sözlüğü olarak kalır.
- PASS için ölçüm/görsel/karşılaştırma/test kanıtı, tarih, kontrol eden ve tasarım/kod sürümü gerekir. NOT APPLICABLE için **bölüme ve faza özgü gerekçe**, kapsamı doğrulayan kişi ve tarih gerekir. Şablonun tamamına toplu N/A yazılamaz.
- Her aktif feedback için (feedback ID, SEC, DESIGN/CODE) çözüm kaydı gerekir. Yerel kayıt yoksa **OPEN** sayılır. Global bir feedback başka bölümde çözülmüş diye bu bölümde çözülmüş olmaz; ortak kanıt kullanılacaksa açıkça bu SEC’ye bağlanır. Ana kaynak kaydının proje genelinde açık kalması, bu bölümde kanıtlı çözülmüş kısmı tek başına bloke etmez.
- Tam SUPERSEDED kayıtlar EXCLUDED; kısmi kaydın yalnız geçersiz kapsamı çıkarılır, ACTIVE REMAINDER açık kalır. Bu ayrım kaynak kaydını silmez.
- Gereken her kararın DEC kimliği, kapsamı, CONFIRMED/onaylayan/tarih/sürüm kanıtı kaydedilir. CONFIRMED müşteri gereksinimi, yeni çizimin Ekin tarafından onaylandığı anlamına gelmez.
- Bağımlılığın DESIGN ve CODE üzerindeki etkisi ayrı sınıflanır: REQUIRED / NON-BLOCKING / DEFERRED NON-BLOCKING. Kapsam veya etki UNVERIFIED ise kapı fail-closed çalışır. Bağımlılık, gerçek bölüm tamamlanmasını etkiliyorsa ertelenemez. Geçerli ertelemede DEP, SEC/faz, etkilememe gerekçesi, sahip, takip checkpointi ve Ekin onayı/tarihi zorunlu.
- Gerçek tarayıcı testi ve erişilebilirlik/etkileşim kanıtı olmadan CODE VERIFIED yok. Tasarım review’ı veya PDF ekranı tarayıcı testi sayılmaz.
- UNIT-PROGRAM: SEC-16–19 kaynak kimlikleri korunur; yeni tek 10 kart bölümü ortak tasarım/kod kanıtını paylaşabilir. Dört alias’ın aynı onaylı sürüme ve ilgili içerik/kontrollere eşlenmesi gerekir. UNIT-PROGRAM closure = dört alias kapısının AND’i; eski panel kaldırıldı diye otomatik N/A/VERIFIED olmaz.

### Bir bölüm üzerinde tek geçiş

Kaynak/yerel kapsamı oku → DESIGN kontrollerini kanıtla → açık karar/bağımlılıkları çöz veya gerçek etki dışını gerekçele → Ekin DESIGN onayı → ayrıca yetkili uygulama → CODE kontrolleri ve gerçek testler → global/recheck sürüm kontrolü → Ekin CODE onayı → GATE sonucunu güncelle. İlgisiz bölümleri baştan tasarlama; tamamlanmış tasarım işini kod işinden ayrı tut.

Bu bir Markdown süreç kapısıdır, uygulamaya yüklenmiş otomatik yazılım kilidi değildir. Tracker’daki sayım ve kanıtlar kapanışın zorunlu doğrulama girdileridir; uyumsuz durum kabul edilmez.


## R0003 — Global karar değişikliği ve hedefli yeniden kontrol

Global başlangıç sürümü **GB-0001**; G-01–G-16 her biri v1. Bu kurulum yeni görsel/global ürün kararı üretmez; mevcut kuralları sürümlü hale getirir. Önceki onay/test kaydı olmadığı için burada recheck yapılmış gibi kaydedilmez.

18 Ekim 2026 tarihli **DEC-028 / GCH-001**, yalnız G-01’i **G-01.v2** olarak günceller ve karar baseline’ını **GB-0002** yapar. G-02–G-04 okunabilirlik, metin genişliği ve hiyerarşi ilkeleri içerik olarak korunur; Workbook yaklaşımı bunların uygulanma referansıdır. Bütün bölüm kontrolleri zaten NOT TESTED ve bütün gate’ler NOT VERIFIED olduğundan eski PASS/onay geçersiz kılınmadı. G-01.v2, her bölüm tasarım review’ında B1/B3/B4 ve font metriği nedeniyle etkilenen D1–D4/F1–F2 kontrollerine bağlanmadan doğrulanmış sayılmaz.

Global bir içerik/tipografi/kontrast/tarih/CTA/erişim vb. karar değişince:

1. DECISIONS içinde yeni **GCH-xxx** olayı: DEC, eski→yeni kural sürümü, tam değişiklik, neden, etkilenen G kimlikleri, onaylayan ve tarih. Hâlâ PROPOSED karar yürürlükteymiş gibi kodlanmaz; gereken bölüm karar onayını bekler.
2. SECTION_TRACKER global matrisi üzerinden etkilenen SEC ve **DESIGN/CODE kontrol ID’lerini** belirle. Liste tam ve sahipli olmalı; etkilenmeyen bölümler için gerekçe kaydedilir. İlgili yerel feedback, karar, bağımlılık ve teknik kontroller de etki analizine dahil edilir.
3. Tracker’a **RC-xxx** satırı aç: GCH/DEC, SEC, faz, kontrol ID listesi, eski/yeni sürüm, eski sonuç/kanıt, yeni NOT TESTED veya bilinen BLOCKED, sahip, yeniden kabul koşulu. Yalnız etkilenen hücreler yeniden açılır.
4. Önceden VERIFIED olan etkilenen bölümün CODE durumu **RECHECK REQUIRED**, kapanışı NOT VERIFIED olur; ilgili sürüm/checklist/feedback kontrolleri yeniden geçmeden tekrar VERIFIED olamaz. Önceden açık bölüm açık kalır, ilgili kontroller güncellenir.
5. Etkilenmeyen kontrol sonuçları ve önceki tasarım kararları/onayları aynen korunur. Değişiklik tasarımın onay kapsamını etkiliyorsa yalnız bu kapsam için onay yeniden istenir; tüm tasarım geçmişi çöpe atılmaz. Ekin onayı yeni sürüm/etkilenen kapsam için yenilenir veya değişmeyen kapsamın hâlâ geçerli olduğu açıkça belgelenir.
6. Yeni kanıtla RC kapatılır; etkilenen kuralın bölümce doğrulanan sürümü güncellenir; GATE yeniden hesaplanır. **RECHECK kaydı açmadan yalnız sürüm numarasını ileri almak yasaktır.**

Global matris bir geçiş şablonudur: etki analizi, listelenmiş ilgili kontrolün bağımlı responsive/interaction kontrollerini de seçer. Örneğin font değişimi B1/B3/B4 ve layout’u etkilenen D1–D4/F1–F2’yi açabilir; yalnız bu kontrolleri açar. Tarih değişimi A4 ve tarih sunan metin/metadata/etkileşim kontrollerini açar; ilgisiz görsel onayını silmez.

Tek bir bölümdeki özel karar, başka bölümleri etkilemiyorsa global değişiklik diye tüm sayfayı yeniden açmaz. Bu ikinci bir tam revizyon turu değil, hedefli regression kontrolüdür.


## Kaynak kayıtlarının operasyonel çözüm endeksi

152/152 özgün ID aşağıdaki FR satırlarıyla operasyonel takibe bağlıdır. Bu ek ikinci bir feedback kaynağı değildir. SCOPE tablosu bölüm bağlantısını, A–F tabloları kontrol sonucunu, yerel çözüm günlüğü faz/bölüm bazlı kanıtı tutar. Tam SUPERSEDED = EXCLUDED; kısmi = yalnız ACTIVE REMAINDER çözülür. OPEN by section başlangıç durumu; kaynak kaydının eski CODE etiketi tek başına bugünkü çözüm sonucu sayılmaz.

| Operasyon ID | Kaynak ID | Özgün referans | SEC kapsamı | Başlangıç aktiflik | DESIGN / CODE çözümü | Supersession bağı | Kontrol bağı |
|---|---|---|---|---|---|---|---|
| FR-F12-L004 | F12-L004 | [F12:L4](references/readability-feedback.md#L4) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-VISUAL |
| FR-F12-L005 | F12-L005 | [F12:L5](references/readability-feedback.md#L5) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L006 | F12-L006 | [F12:L6](references/readability-feedback.md#L6) | SEC-02 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-INTRO |
| FR-F12-L007 | F12-L007 | [F12:L7](references/readability-feedback.md#L7) | SEC-03 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RECOG |
| FR-F12-L008 | F12-L008 | [F12:L8](references/readability-feedback.md#L8) | SEC-04 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-VISUAL |
| FR-F12-L009 | F12-L009 | [F12:L9](references/readability-feedback.md#L9) | SEC-05 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-COPY |
| FR-F12-L010 | F12-L010 | [F12:L10](references/readability-feedback.md#L10) | SEC-20 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RHYTHM |
| FR-F12-L011 | F12-L011 | [F12:L11](references/readability-feedback.md#L11) | SEC-22 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-BIO |
| FR-F12-L012 | F12-L012 | [F12:L12](references/readability-feedback.md#L12) | SEC-24 | OPEN — ACTIVE REMAINDER | OPEN by section / OPEN by section | SUP-08 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-DATE |
| FR-F12-L014 | F12-L014 | [F12:L14](references/readability-feedback.md#L14) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L015 | F12-L015 | [F12:L15](references/readability-feedback.md#L15) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L016 | F12-L016 | [F12:L16](references/readability-feedback.md#L16) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L017 | F12-L017 | [F12:L17](references/readability-feedback.md#L17) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L018 | F12-L018 | [F12:L18](references/readability-feedback.md#L18) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L019 | F12-L019 | [F12:L19](references/readability-feedback.md#L19) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L020 | F12-L020 | [F12:L20](references/readability-feedback.md#L20) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L021 | F12-L021 | [F12:L21](references/readability-feedback.md#L21) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L022 | F12-L022 | [F12:L22](references/readability-feedback.md#L22) | SEC-03 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RECOG |
| FR-F12-L023 | F12-L023 | [F12:L23](references/readability-feedback.md#L23) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L025 | F12-L025 | [F12:L25](references/readability-feedback.md#L25) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L026 | F12-L026 | [F12:L26](references/readability-feedback.md#L26) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L027 | F12-L027 | [F12:L27](references/readability-feedback.md#L27) | SEC-01 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-01 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L028 | F12-L028 | [F12:L28](references/readability-feedback.md#L28) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L029 | F12-L029 | [F12:L29](references/readability-feedback.md#L29) | SEC-01 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-01 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L030 | F12-L030 | [F12:L30](references/readability-feedback.md#L30) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L031 | F12-L031 | [F12:L31](references/readability-feedback.md#L31) | SEC-01 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-02 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L032 | F12-L032 | [F12:L32](references/readability-feedback.md#L32) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L033 | F12-L033 | [F12:L33](references/readability-feedback.md#L33) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L035 | F12-L035 | [F12:L35](references/readability-feedback.md#L35) | SEC-03 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RECOG |
| FR-F12-L036 | F12-L036 | [F12:L36](references/readability-feedback.md#L36) | SEC-03 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RECOG |
| FR-F12-L037 | F12-L037 | [F12:L37](references/readability-feedback.md#L37) | SEC-03 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RECOG |
| FR-F12-L039 | F12-L039 | [F12:L39](references/readability-feedback.md#L39) | SEC-08 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F12-L040 | F12-L040 | [F12:L40](references/readability-feedback.md#L40) | SEC-08 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F12-L041 | F12-L041 | [F12:L41](references/readability-feedback.md#L41) | SEC-08 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F12-L042 | F12-L042 | [F12:L42](references/readability-feedback.md#L42) | SEC-08 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F12-L043 | F12-L043 | [F12:L43](references/readability-feedback.md#L43) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F12-L044 | F12-L044 | [F12:L44](references/readability-feedback.md#L44) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F12-L046 | F12-L046 | [F12:L46](references/readability-feedback.md#L46) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L047 | F12-L047 | [F12:L47](references/readability-feedback.md#L47) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L048 | F12-L048 | [F12:L48](references/readability-feedback.md#L48) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L049 | F12-L049 | [F12:L49](references/readability-feedback.md#L49) | SEC-12 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L050 | F12-L050 | [F12:L50](references/readability-feedback.md#L50) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L051 | F12-L051 | [F12:L51](references/readability-feedback.md#L51) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L052 | F12-L052 | [F12:L52](references/readability-feedback.md#L52) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L053 | F12-L053 | [F12:L53](references/readability-feedback.md#L53) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-WEEKS |
| FR-F12-L055 | F12-L055 | [F12:L55](references/readability-feedback.md#L55) | SEC-27 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-CTA |
| FR-F12-L056 | F12-L056 | [F12:L56](references/readability-feedback.md#L56) | SEC-27 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-CTA |
| FR-F12-L057 | F12-L057 | [F12:L57](references/readability-feedback.md#L57) | SEC-27 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-CTA |
| FR-F12-L058 | F12-L058 | [F12:L58](references/readability-feedback.md#L58) | SEC-27 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-CTA |
| FR-F12-L060 | F12-L060 | [F12:L60](references/readability-feedback.md#L60) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L061 | F12-L061 | [F12:L61](references/readability-feedback.md#L61) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L062 | F12-L062 | [F12:L62](references/readability-feedback.md#L62) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L063 | F12-L063 | [F12:L63](references/readability-feedback.md#L63) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L064 | F12-L064 | [F12:L64](references/readability-feedback.md#L64) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L065 | F12-L065 | [F12:L65](references/readability-feedback.md#L65) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L066 | F12-L066 | [F12:L66](references/readability-feedback.md#L66) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L067 | F12-L067 | [F12:L67](references/readability-feedback.md#L67) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN — ACTIVE REMAINDER | OPEN by section / OPEN by section | SUP-05 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L068 | F12-L068 | [F12:L68](references/readability-feedback.md#L68) | SEC-16, SEC-17, SEC-18, SEC-19 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-05 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L070 | F12-L070 | [F12:L70](references/readability-feedback.md#L70) | SEC-20 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RHYTHM |
| FR-F12-L071 | F12-L071 | [F12:L71](references/readability-feedback.md#L71) | SEC-20 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RHYTHM |
| FR-F12-L072 | F12-L072 | [F12:L72](references/readability-feedback.md#L72) | SEC-20 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RHYTHM |
| FR-F12-L073 | F12-L073 | [F12:L73](references/readability-feedback.md#L73) | SEC-20 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RHYTHM |
| FR-F12-L075 | F12-L075 | [F12:L75](references/readability-feedback.md#L75) | SEC-21 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FIT |
| FR-F12-L076 | F12-L076 | [F12:L76](references/readability-feedback.md#L76) | SEC-21 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FIT |
| FR-F12-L077 | F12-L077 | [F12:L77](references/readability-feedback.md#L77) | SEC-21 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FIT |
| FR-F12-L078 | F12-L078 | [F12:L78](references/readability-feedback.md#L78) | SEC-21 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FIT |
| FR-F12-L079 | F12-L079 | [F12:L79](references/readability-feedback.md#L79) | SEC-21 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FIT |
| FR-F12-L080 | F12-L080 | [F12:L80](references/readability-feedback.md#L80) | SEC-21 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FIT |
| FR-F12-L082 | F12-L082 | [F12:L82](references/readability-feedback.md#L82) | SEC-22 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-BIO |
| FR-F12-L083 | F12-L083 | [F12:L83](references/readability-feedback.md#L83) | SEC-22 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-BIO |
| FR-F12-L084 | F12-L084 | [F12:L84](references/readability-feedback.md#L84) | SEC-22 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-BIO |
| FR-F12-L085 | F12-L085 | [F12:L85](references/readability-feedback.md#L85) | SEC-22 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-BIO |
| FR-F12-L087 | F12-L087 | [F12:L87](references/readability-feedback.md#L87) | SEC-26 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L088 | F12-L088 | [F12:L88](references/readability-feedback.md#L88) | SEC-26 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L089 | F12-L089 | [F12:L89](references/readability-feedback.md#L89) | SEC-26 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L090 | F12-L090 | [F12:L90](references/readability-feedback.md#L90) | SEC-26 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L091 | F12-L091 | [F12:L91](references/readability-feedback.md#L91) | SEC-26 | OPEN — ACTIVE REMAINDER | OPEN by section / OPEN by section | SUP-07 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L092 | F12-L092 | [F12:L92](references/readability-feedback.md#L92) | SEC-26 | OPEN — ACTIVE REMAINDER | OPEN by section / OPEN by section | SUP-07 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L093 | F12-L093 | [F12:L93](references/readability-feedback.md#L93) | SEC-26 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F12-L095 | F12-L095 | [F12:L95](references/readability-feedback.md#L95) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L096 | F12-L096 | [F12:L96](references/readability-feedback.md#L96) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L097 | F12-L097 | [F12:L97](references/readability-feedback.md#L97) | SEC-23, SEC-28 | OPEN — ACTIVE REMAINDER | OPEN by section / OPEN by section | SUP-10 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L098 | F12-L098 | [F12:L98](references/readability-feedback.md#L98) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L099 | F12-L099 | [F12:L99](references/readability-feedback.md#L99) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L100 | F12-L100 | [F12:L100](references/readability-feedback.md#L100) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L101 | F12-L101 | [F12:L101](references/readability-feedback.md#L101) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L102 | F12-L102 | [F12:L102](references/readability-feedback.md#L102) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L103 | F12-L103 | [F12:L103](references/readability-feedback.md#L103) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F12-L104 | F12-L104 | [F12:L104](references/readability-feedback.md#L104) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-CTA |
| FR-F12-L106 | F12-L106 | [F12:L106](references/readability-feedback.md#L106) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F12-L107 | F12-L107 | [F12:L107](references/readability-feedback.md#L107) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F12-L108 | F12-L108 | [F12:L108](references/readability-feedback.md#L108) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F12-L109 | F12-L109 | [F12:L109](references/readability-feedback.md#L109) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F12-L110 | F12-L110 | [F12:L110](references/readability-feedback.md#L110) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F12-L112 | F12-L112 | [F12:L112](references/readability-feedback.md#L112) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L113 | F12-L113 | [F12:L113](references/readability-feedback.md#L113) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L114 | F12-L114 | [F12:L114](references/readability-feedback.md#L114) | SEC-19 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-05 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L115 | F12-L115 | [F12:L115](references/readability-feedback.md#L115) | SEC-12 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L116 | F12-L116 | [F12:L116](references/readability-feedback.md#L116) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L117 | F12-L117 | [F12:L117](references/readability-feedback.md#L117) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L119 | F12-L119 | [F12:L119](references/readability-feedback.md#L119) | SEC-25 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FAQ |
| FR-F12-L120 | F12-L120 | [F12:L120](references/readability-feedback.md#L120) | SEC-25 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FAQ |
| FR-F12-L121 | F12-L121 | [F12:L121](references/readability-feedback.md#L121) | SEC-25 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FAQ |
| FR-F12-L122 | F12-L122 | [F12:L122](references/readability-feedback.md#L122) | SEC-25 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-FAQ |
| FR-F12-L124 | F12-L124 | [F12:L124](references/readability-feedback.md#L124) | SEC-23, SEC-24 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-08 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L125 | F12-L125 | [F12:L125](references/readability-feedback.md#L125) | SEC-23, SEC-24 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-DATE |
| FR-F12-L127 | F12-L127 | [F12:L127](references/readability-feedback.md#L127) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-META |
| FR-F12-L128 | F12-L128 | [F12:L128](references/readability-feedback.md#L128) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | SUPERSEDED | EXCLUDED / EXCLUDED | SUP-09 | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; Yeni DEC / SUP kontrolü |
| FR-F12-L130 | F12-L130 | [F12:L130](references/readability-feedback.md#L130) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-READ |
| FR-F12-L131 | F12-L131 | [F12:L131](references/readability-feedback.md#L131) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F12-L132 | F12-L132 | [F12:L132](references/readability-feedback.md#L132) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F12-L133 | F12-L133 | [F12:L133](references/readability-feedback.md#L133) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F12-L134 | F12-L134 | [F12:L134](references/readability-feedback.md#L134) | SEC-27 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-CTA |
| FR-F12-L135 | F12-L135 | [F12:L135](references/readability-feedback.md#L135) | SEC-26, SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F14-L005 | F14-L005 | [F14:L5](references/nilufer-feedback-2026-10-14.md#L5) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F14-L006 | F14-L006 | [F14:L6](references/nilufer-feedback-2026-10-14.md#L6) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F14-L007 | F14-L007 | [F14:L7](references/nilufer-feedback-2026-10-14.md#L7) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F14-L008 | F14-L008 | [F14:L8](references/nilufer-feedback-2026-10-14.md#L8) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F14-L009 | F14-L009 | [F14:L9](references/nilufer-feedback-2026-10-14.md#L9) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F14-L010 | F14-L010 | [F14:L10](references/nilufer-feedback-2026-10-14.md#L10) | SEC-01 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-HERO |
| FR-F14-L012 | F14-L012 | [F14:L12](references/nilufer-feedback-2026-10-14.md#L12) | SEC-02 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-INTRO |
| FR-F14-L013 | F14-L013 | [F14:L13](references/nilufer-feedback-2026-10-14.md#L13) | SEC-02 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-INTRO |
| FR-F14-L014 | F14-L014 | [F14:L14](references/nilufer-feedback-2026-10-14.md#L14) | SEC-02 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-INTRO |
| FR-F14-L016 | F14-L016 | [F14:L16](references/nilufer-feedback-2026-10-14.md#L16) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L017 | F14-L017 | [F14:L17](references/nilufer-feedback-2026-10-14.md#L17) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L018 | F14-L018 | [F14:L18](references/nilufer-feedback-2026-10-14.md#L18) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L019 | F14-L019 | [F14:L19](references/nilufer-feedback-2026-10-14.md#L19) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L020 | F14-L020 | [F14:L20](references/nilufer-feedback-2026-10-14.md#L20) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L021 | F14-L021 | [F14:L21](references/nilufer-feedback-2026-10-14.md#L21) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L022 | F14-L022 | [F14:L22](references/nilufer-feedback-2026-10-14.md#L22) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L023 | F14-L023 | [F14:L23](references/nilufer-feedback-2026-10-14.md#L23) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L024 | F14-L024 | [F14:L24](references/nilufer-feedback-2026-10-14.md#L24) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L025 | F14-L025 | [F14:L25](references/nilufer-feedback-2026-10-14.md#L25) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L026 | F14-L026 | [F14:L26](references/nilufer-feedback-2026-10-14.md#L26) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L027 | F14-L027 | [F14:L27](references/nilufer-feedback-2026-10-14.md#L27) | SEC-16, SEC-17, SEC-18, SEC-19 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PROGRAM |
| FR-F14-L028 | F14-L028 | [F14:L28](references/nilufer-feedback-2026-10-14.md#L28) | SEC-20 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RHYTHM |
| FR-F14-L030 | F14-L030 | [F14:L30](references/nilufer-feedback-2026-10-14.md#L30) | SEC-26 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-TESTIMONIAL |
| FR-F14-L032 | F14-L032 | [F14:L32](references/nilufer-feedback-2026-10-14.md#L32) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PAYMENT |
| FR-F14-L033 | F14-L033 | [F14:L33](references/nilufer-feedback-2026-10-14.md#L33) | SEC-23, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PRACTICAL |
| FR-F14-L034 | F14-L034 | [F14:L34](references/nilufer-feedback-2026-10-14.md#L34) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F14-L035 | F14-L035 | [F14:L35](references/nilufer-feedback-2026-10-14.md#L35) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F14-L037 | F14-L037 | [F14:L37](references/nilufer-feedback-2026-10-14.md#L37) | SEC-03 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-RECOG |
| FR-F14-L038 | F14-L038 | [F14:L38](references/nilufer-feedback-2026-10-14.md#L38) | SEC-12 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-IMAGE |
| FR-F14-L039 | F14-L039 | [F14:L39](references/nilufer-feedback-2026-10-14.md#L39) | SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SUPPORT |
| FR-F14-L040 | F14-L040 | [F14:L40](references/nilufer-feedback-2026-10-14.md#L40) | SEC-08 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-SOUND |
| FR-F14-L042 | F14-L042 | [F14:L42](references/nilufer-feedback-2026-10-14.md#L42) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, SEC-07, SEC-08, SEC-09, SEC-10, SEC-11, SEC-12, SEC-13, SEC-14, SEC-15, SEC-16, SEC-17, SEC-18, SEC-19, SEC-20, SEC-21, SEC-22, SEC-23, SEC-24, SEC-25, SEC-26, SEC-27, SEC-28 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-META |
| FR-F14-L044 | F14-L044 | [F14:L44](references/nilufer-feedback-2026-10-14.md#L44) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-LEGAL |
| FR-F14-L045 | F14-L045 | [F14:L45](references/nilufer-feedback-2026-10-14.md#L45) | SEC-23 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-PAYMENT |
| FR-F14-L046 | F14-L046 | [F14:L46](references/nilufer-feedback-2026-10-14.md#L46) | SEC-23, SEC-24 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-DATE |
| FR-F14-L047 | F14-L047 | [F14:L47](references/nilufer-feedback-2026-10-14.md#L47) | SEC-23, SEC-24 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-DATE |
| FR-F14-L048 | F14-L048 | [F14:L48](references/nilufer-feedback-2026-10-14.md#L48) | SEC-23, SEC-24 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-DATE |
| FR-F14-L049 | F14-L049 | [F14:L49](references/nilufer-feedback-2026-10-14.md#L49) | SEC-23, SEC-24 | OPEN | OPEN by section / OPEN by section | — | İlgili SEC D-A2/A3/A5 ve C-A2/A3/A5; VR-DATE |

## R0003 doğrulama sözleşmesi

Kontrol: 152/152 özgün source row ve referansları değişmedi; 25 PDF sayfası/24 akış eşlemesi korunur; 10 SUPERSEDED grubu izlenir. 28 takip biriminin iki fazında 27’şer kontrol maddesi ve 16 global kural bağı vardır. Mevcut sonuçlar test yapılmış gibi PASS’a çevrilmedi.

Kapanış doğrulama örnekleri bellekte denenir: applicable NOT TESTED/FAIL/BLOCKED; kanıtsız PASS; gerekçesiz N/A; açık feedback/karar/DEP; gerçek test veya Ekin onayı eksikliği; stale global sürüm/açık RC → reddet. Tam ve kanıtlı DESIGN onayı CODE’u otomatik kapatmaz. Gerekçeli ve Ekin onaylı gerçek etki dışı DEP ertelemesi yalnız ilgili faz/bölüm için kabul edilebilir.

GB etiketi proje bağlamıdır; yalnız baseline numarası değişti diye bütün bölümler stale sayılmaz. Kapanışta her uygulanabilir G kuralının ilgili kapsamda yürürlükteki sürümü karşılaştırılır. Etki analizinde açıkça etkilenmeyen SEC için eski kural kanıtı geçerlidir; GCH etki dışı gerekçesiyle bağlanır. Yalnız etkilenen kural/kontrol kapsamı yeni sürüm ve recheck gerektirir. Bu ayrım ilgisiz bölümleri veya onayları otomatik yeniden açmayı engeller.

## R0003 şema sınaması

Bellekte, gerçek proje onayı/testi yazmadan 23 kapanış senaryosu sınandı: olumsuz koşullarda reddetme, gerekçeli/onaylı gerçek etki dışı erteleme ve bağımsız tasarım kilometre taşı kontrol edildi. Ayrı hedefli recheck denemesinde yalnız seçilen bölüm/kontroller açıldı; ilgisiz PASS ve tasarım onay kapsamı korundu. Bunlar süreç mantığı simülasyonudur; gerçek landing tarayıcı testi veya Ekin onayı değildir.
