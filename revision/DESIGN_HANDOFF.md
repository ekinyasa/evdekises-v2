# Tasarımdan Uygulamaya Aktarım

18 Ekim 2026 · R0004 · [Ana envanter](REVISION_MASTER.md)

Durum: kaynak konsolidasyonu tamam; tasarım review paketi var. Yeni çizim/redesign, landing/public copy değişikliği veya uygulama yapılmadı. PDF son çalışmadır; onay belgesi değil. DESIGN ve CODE ayrı kalır.

## Üretim kaynağı ve kanıt

Asıl tasarım referansı [illustrator-latest.pdf](references/illustrator-latest.pdf), 25 sayfa; F12 [readability-feedback.md](references/readability-feedback.md), F14 [nilufer-feedback-2026-10-14.md](references/nilufer-feedback-2026-10-14.md). PDF8/9 tek mevcut section; eski Program PDF17–20 SUPERSEDED tasarım. Eski references/program-* dosyaları son tasarım onayı sayılmaz. .ai yolu/artboard isimleri ve gerekirse bağımsız font/fotoğraf varlıkları DEP-002/015/017. Mobil artboard yok: DEP-016.

R0001’de önerilen ayrı original-feedback-version/illustrator-revisions/feedback-2026-10-14 referans klasörleri bu tur oluşturulmadı; sağlanan revision/references kaynakları esas alınır. ChatGPT sources aynası salt okunur kalır.

## Global tipografi sözleşmesi — DEC-028 / GCH-001

- Web arayüzünün tek ana fontu **Plus Jakarta Sans**.
- **SF** ve **NB International** tasarım/uygulama hedefi değildir; eski dosya veya CSS’te görünmeleri korunacak karar anlamına gelmez.
- **Newsletter serif** yalnız ileride ayrı ve açık onayla eklenebilir; şu anda fallback, dekoratif alternatif veya ikinci gövde fontu olarak kullanılmaz.
- Hero’daki el yazısı ve özel marka grafikleri şimdilik korunacak istisnalardır. Bunlar body/UI tipografi sistemine dönüştürülmez.
- **Nilüfer Ormanlı logosu** bir logo varlığıdır; tipografi sisteminin veya font sayımının parçası değildir.
- Ölçek, yoğun metinli Workbook ekranındaki okunabilirlik yaklaşımını izler: body-first hiyerarşi, rahat satır yüksekliği/paragraf arası, okunur sütun ve font küçültmeden önce yerleşimi açma. Mevcut yaklaşık ölçüler review rehberidir; R0004 yeni zorunlu değer veya ağırlık seti onaylamaz.
- Kodlama bu turda yapılmaz. Uygulama aşamasında Plus Jakarta Sans’ın gerçek yüklenmesi, Türkçe glifleri, ağırlıkları, fallback’i ve tüm yoğun metin/responsive kırılımları ayrıca test edilir.

## Kesin metin sözleşmeleri — yalnız takip kaydı

Bu bölüm kamu kopyası dosyasını değiştirmez; yeni müşteri kaynak metnini aynen erişilebilir tutar. Alıntılar tasarım ölçüsü/onayı değildir.

### SEC-01 Hero — DEC-009

- Soldaki dört bir gün örneği mevcut onaylı COPY/SVG metninden korunur; mobilde sonuç cümlesinden önce okunur (F12-L032).
- Sağ başlık: **NE ZAMANDIR “BİR GÜN” DİYORSUN?** (F14-L006).
- Sonuç: **“Bir gün” dediğin şeyi dünyayla buluştur.** (F14-L007; PDF1’deki noktasız hali yeni tam ifadeyi değiştirmez).
- Küçük imza: **EVDEKİ SES** (F14-L008) aktif müşteri talebidir. Ekin’in imzasız tasarım tercihi DEC-027’de **PROPOSED EXCEPTION — CLIENT APPROVAL PENDING** olarak kayıtlıdır; Nilüfer onaylamadan talep tamamlandı veya SUPERSEDED sayılmaz.
- Buton: **Evdeki Ses’e Katıl** (F14-L009).
- Hero’dan çıkarılacaklar: sınırlı kontenjan, 10 kişi, 6 hafta, Nilüfer Ormanlı’dan, program tanımı (F14-L010). Bu bilgiler gerekli yerde ikinci ekrana taşınır; tüm landing’den silinmez.

### SEC-02 İkinci ekran — DEC-010

Sağ üst: **Niyeti var. Malzemesi var. Hazırlığı var. Ama kendisi yok.** (F14-L012).
Krem kartın tepesinde küçük turuncu etiket: **6 HAFTA · HER ÇARŞAMBA · EN FAZLA 10 KİŞİ** (F14-L013).
Kartın ikinci cümlesi: **Sende canlı olan yerden başlıyor, onunla çalışıyor ve program bitmeden ona biçim verip dünyayla buluşturuyorsun.** (F14-L014).
Geri kalan onaylı kopya açık yeni talimat olmadan atılmaz veya yeniden yazılmaz.

### Birleşik Program — DEC-011

Tek sistem, 10 kart; tıklama/hover ile içerik açma yok. Grid seçimi henüz tasarlanmadı. Fotoğraf gerekmez; eski panellerin stock yenilemesi yapılacak aktif iş değildir. Giriş: **Program boyunca seçtiğin şeyin başına tekrar tekrar dönüyorsun. Bunun için haftada en az 45 dakika ayırmanı öneriyoruz.** (F14-L017).

| Kart | Kaynak | Tam başlık ve müşteri metni |
|---|---|---|
| CARD-01 | [F14:L18](references/nilufer-feedback-2026-10-14.md#L18) | Haftalık canlı buluşmalar — Her Çarşamba 2 saat birlikteyiz. Haftanın malzemesini buraya getiriyor; sesle, sözle ve yaptığın şeyin kendisiyle çalışıyoruz. |
| CARD-02 | [F14:L19](references/nilufer-feedback-2026-10-14.md#L19) | Haftanın dersi — Her hafta, o haftanın çalışmasını açan kayıtlı bir video ders. Neye kulak vereceğimizi ve bunun yaptığın şeyle ilişkisini burada kuruyoruz. |
| CARD-03 | [F14:L20](references/nilufer-feedback-2026-10-14.md#L20) | Günlük Akort — Her gün 8–10 dakikalık rehberli bir ses kaydı. İçeride hareket edeni yeniden duyabileceğin küçük bir temas alanı. |
| CARD-04 | [F14:L21](references/nilufer-feedback-2026-10-14.md#L21) | Rehberli pratikler — Ses, nefes, beden, hareket ve imgeyle çalışan yaklaşık 15 dakikalık pratikler. Video ya da ses kaydı olarak, kendi zamanında. |
| CARD-05 | [F14:L22](references/nilufer-feedback-2026-10-14.md#L22) | Haftanın araştırmaları — Hafta boyunca yanında taşıyacağın küçük yazılı araştırmalar. Gördüğünü, duyduğunu ve denediğini üzerinde çalıştığın şeye taşıyorsun. |
| CARD-06 | [F14:L23](references/nilufer-feedback-2026-10-14.md#L23) | Workbook ve Yaratıcı Ses Haritası — Her haftanın sorularını, fark ettiklerini ve kararlarını taşıyan çalışma materyalleri. Altı haftanın sonunda burada biriken izler, kendi yaratım sürecine dönüp bakabileceğin kişisel Yaratıcı Ses Haritana dönüşüyor. |
| CARD-07 | [F14:L24](references/nilufer-feedback-2026-10-14.md#L24) | Partner çalışması — Her hafta partnerinle 20–25 dakika buluşuyor, yaptığın şeyi paylaşıyor ve onda ne kaldığını duyuyorsun. |
| CARD-08 | [F14:L25](references/nilufer-feedback-2026-10-14.md#L25) | Evdeki Ses asistanı — Programın çalışma biçimiyle kurulmuş kişisel bir yapay zekâ alanı. Canlı buluşmaların arasında kaldığın yerden işe girmek için. |
| CARD-09 | [F14:L26](references/nilufer-feedback-2026-10-14.md#L26) | Proje Tezgâhı — İşin biçim kazanmaya başladığında canlı buluşmaların bir bölümü tezgâha dönüşüyor. Kameralar açık, mikrofonlar kapalı, herkes kendi işinin başında. |
| CARD-10 | [F14:L27](references/nilufer-feedback-2026-10-14.md#L27) | Oyun Alanı — Her hafta isteğe bağlı birkaç davet. Kendi malzemene sesle, hareketle, nesnelerle ya da küçük ritüellerle başka bir yerden yaklaşmak için. |

Kaynak sırası izlendi; olası grid okuma sırası tasarım review’da açıkça kaydedilir. Eski ayrı Kendi malzemenle çalışma kartı yeni girişte karşılanır; 10 sayısını tutturmak için içerik sessizce düşürülmez. Kartların altında Programın Ritmi/metronom korunur (F14-L028; DEP-020).

### Yeni testimonial — DEC-013

Nilüfer’in hemen ardından, Pratik Bilgiler’den önce tam dört kart. Aslınur, Esma, Ceren, Özge: yalnız isim/konum gereksinimi mevcut. Yorumlar, bağlamlar ve kullanım izinleri DEP-006. Yıllar içinde birlikte çalıştığım kişilerden öneri başlık; kesin metin onayı yok. Evdeki Ses sonucu gibi sunulmaz. Bu belge testimonial cümlesi üretmez.

### Pratik Bilgiler / soru kapısı — DEC-014/015

Fiyat yanı değer cümlesi (F14-L033): **6 hafta boyunca canlı buluşmalar, günlük ve haftalık rehberli çalışmalar, kendi malzemen üzerinde çalışma, partner desteği ve Evdeki Ses asistanıyla birlikte ilerliyorsun.**

Üç taksit talebi UNVERIFIED/PENDING; tutar/teknik/maliyet teyidi yok. Mevcut referans 15.500 TL peşin, 2 × 8.500 TL; yeni onay olmadan fiyat/plan değişmez. Onaylı kısa iade/cayma satırı ve checkout mesafeli satış/ön bilgilendirme DEP-010; içerik uydurulmaz. Yeni Nilüfer fotoğrafı DEP-007.

Soru kapısı F12-L102: **Aklında hâlâ bir soru mu var?** Alt metin F12-L103: **Katılmadan önce bize sormak istediğin bir şey varsa kısa formu doldur. Seninle iletişime geçelim.** Gerçek form/iletişim hedefi DEP-012. Ana satış yolu doğrudan checkout; başvuru/onay adımı eklenmez.

### Kesin Tipografi Sözleşmesi — DEC-028

- **Web arayüzünün tek ana fontu:** `Plus Jakarta Sans`.
- **Kullanımdan kaldırılan fontlar:** `SF` (San Francisco / SF Pro) ve `NB International` (NB International Pro) artık kesinlikle kullanılmayacaktır.
- **Newsletter serif:** Yalnızca ileride ayrıca açık onay verilirse kullanılabilir; onaylanmadıkça arayüzde yer almaz.
- **İstisnalar:** Hero'daki el yazısı (`ekinBOHO` / SVG) ve özel marka grafikleri şimdilik korunacak istisnalardır.
- **Nilüfer Ormanlı logosu:** Tipografi sisteminin bir parçası değildir; özgün logo/wordmark olarak bağımsız değerlendirilir.
- **Yoğun metinli ekranlar (Workbook ekranı) test referansı:**
  * Başlık: 30px / 38px
  * Gövde: 18px / 28px
  * Paragraf aralığı: 18px
  * Başlık-gövde aralığı: 16px
  * Bu değerler tüm siteye zorunlu tek ölçek olarak dayatılmaz; mevcut tasarım hiyerarşisi korunarak uygulanır. Brifteki 19–20px gövde önerisi yeni bir standart olarak kabul edilmez.
- **Uygulama kapsamı (18 Ekim 2026):**
  * Global font değişikliği uygulanır.
  * Yalnızca SEC-16–19 Program bölümü 10 kartlık birleşik grid olarak yeniden oluşturulur.
  * 10 kartlık grid görsel onaya sunulur; bu aşamada Program grid'inin görünümü nihai onaylanmış tasarım olarak kaydedilmez (REVIEWED — CLIENT APPROVAL PENDING).
  * Diğer bölümlerde font değişiminden kaynaklanan satır kırılması, taşma veya yerleşim sorunları tespit edilip raporlanır; diğer bölümlerin tasarımı kendiliğinden değiştirilmez.

## Kamu metni ve ürün kapsamı kontrolü

| Kaynak alanı | Bölüm / final karşılığı | Koruma / açık değişiklik |
|---|---|---|
| COPY L21–45 hero ve ilk teklif | SEC-01/02 | F14-L005–014 yalnız belirtilen metin/dağılımı değiştirir; ilk ekran teklif bilgisini kaldırırken ikinci ekranı kayıpsız kontrol et |
| COPY L49–126 tanıma/yöntem/biçim/karşılaşma/eşik/ses | SEC-03–08 | Tam kopya korunur; noktalama F14-L037; PDF5 yetkisiz farkları uygulanmaz |
| COPY L130–175 altı hafta | SEC-09–15 | 00 giriş, 6 hafta metni/output; F12-L048 output ilk harfi büyük; tek bir şey / ona referansı korunur |
| COPY L180–238 program bileşenleri | SEC-16–19 birleşik | F14-L017–027 yeni giriş+10 tam metin üstündür; eski dört fotoğraf paneli tasarımını uygulama |
| COPY L240–246 ritim | SEC-20 | Kopya ve metronom korunur; global okunabilirlik iptal değildir |
| COPY L250–274 uygunluk/biyografi | SEC-21/22 | Onaylı kopya ve güçlü iki ankraj; biyografi linki gerçek hedef bekler |
| COPY L278–282 testimonial yer tutucu | SEC-26 | Gerçek dört kaynak gelene kadar üretme/yayınlama |
| COPY L286–311 pratik/ücret | SEC-23 | Yalnız tarih override ve açık F14 değer/fotoğraf/istekleri; üç taksit/hukuk onayı beklenir |
| COPY L315–347 sekiz SSS | SEC-25 | Tüm sekiz soru/cevap korunur; sunum kararı açık; mapping matrisi SECTION_TRACKER’da |
| COPY L351–353 kapanış | SEC-24 | Kompozisyon koruma, tarih F14-L049 ile değişecek |
| PRODUCT §1–24 | İç mantık / içerik üretim kapsamı | Final müfredat/satış iddiası değil. §22 esnek ayrıntılar DEP-023; mahremiyet/Harita DEP-022 |
| OPS bütün belge | Ücret/checkout/erişim/hukuk | Eski tarihler SUPERSEDED; kalan açık durumlar DEP-005/009/010/011/019/022/024 ile korunur |

## Teknik gözlem envanteri

Statik tespit, doğrulanmış tarayıcı bug’ı veya tamamlanmış düzeltme değildir. Kullanıcı bildirdiği overlap/watermark kaynaklı gereksinim olarak ayrıca izlenir.

| ID | Kaynak / konum | Etki | Gerekli işlem | Öncelik | Karar / DESIGN / CODE | Kabul | Bağımlılık |
|---|---|---|---|---|---|---|---|
| TECH-001 | index.html:L29 header 6 Hafta → #inside-world | CMP-01 / SEC-09 | Mevcut hedef var ama yolculuk girişinden önceki sahne; #hafta-0 doğru semantik hedef önerisi Ekin review/QA | P1 | PROPOSED hedef / REVIEW / OLD | Nav → 00 overview; header yüksekliği metni örtmez | DEP-016 |
| TECH-002 | index.html:L1033 fiyat CTA href=#karar | SEC-23 ve tüm satın alma CTA’ları | Satın alma düğmesi kendi fiyat alanına kaydırıyor; gerçek checkout URL bağlanacak | P0 | CONFIRMED gereklilik / WAIT_SOURCE / OLD | VR-CTA; gerçek ödeme akışı testi | DEP-011 |
| TECH-003 | index.html:L969 .nilufer-more-link span | SEC-22 | Metin bağlantı gibi görünür ama a/href değil; gerçek hedef alınarak erişilebilir link gerekir | P1 | CONFIRMED koruma / WAIT_SOURCE / OLD | VR-BIO; tıklama/klavye gerçek hedefe gider | DEP-017 |
| TECH-004 | main.js:L298–305; index.html:L1262–1263 | CMP-03 | Canlı Destek düğmesi FAQ all açıyor; gerçek destek mi FAQ mı netleştir; etiket ve davranış uyumlu olsun | P1 | PENDING davranış / REVIEW / OLD | VR-SUPPORT; üst üste binme yok, yanıltıcı işlev beklentisi yok | DEP-012 |
| TECH-005 | index.html:L7 ve head tamamı | CMP-04 | Description eski; OG/Twitter/canonical yok. Exact description kesin; paylaşım görseli/URL kaynak bekliyor | P1 | CONFIRMED description / WAIT_SOURCE sharing / OLD | VR-META; kaynak dışı URL/görsel üretilmez | DEP-021 |
| TECH-006 | styles.css:L97; L1557–1565; L2003–2011 ve çoklu sahne stilleri | GLOBAL / özellikle haftalar ve uzun içerik | mandatory snap + 100vh + overflow:hidden statik risk; içerik erişilemezliği tarayıcıda yeniden doğrulanmadan kesin bug/çözüldü denmez | P0 | CONFIRMED erişim hedefi / REVIEW / OLD | VR-READ; kısa viewport/zoom/mobil/klavye ile son satıra erişim | DEP-016 |
| TECH-007 | main.js FAQ handlers ve index.html #faqModal | SEC-25 | Escape/odak dönüşü mevcut; Tab focus trap görünmüyor. Modal kalırsa odak sınırı, arkaplan ve scroll erişimi test edilecek | P1 | PENDING QA / REVIEW / OLD | VR-FAQ; klavye, kapatma ve doğru cevap açılışı kanıtı | DEP-013 |
| TECH-008 | styles.css:L68–72 font tokens; index.html:L9–12 yüklemeler | GLOBAL / SEC-01–28 | Eski kodda NB International Pro tanımı/yükleme belirsizliği ve SF referansları bulunabilir; DEC-028 ile ikisi de aktif hedef olmaktan çıktı. Plus Jakarta Sans henüz uygulanmadı | P1 | CONFIRMED karar / NOT IMPLEMENTED / OLD | Plus Jakarta Sans gerçekten yüklenir; SF/NB arayüz kullanımına kalıntı bırakılmaz; Türkçe glif, ağırlık ve fallback kontrol edilir; Hero grafik istisnaları ve logo yanlışlıkla dönüştürülmez | DEP-015 |
| TECH-009 | styles.css son kural L3751–3752 | Program/Ritim/Uygunluk/Nilüfer/Pratik p seçicileri | section.scene-program .container div div p kuralı clamp(12px,1vw,15px) uygular; geniş kapsayan geç kural küçük body’nin olası kaynağı. Sadece yerel font rötuşu yeni cascade ile ezilebilir | P1 | CONFIRMED statik kural / REVIEW / OLD | Final computed style ile hedef body ölçüleri/line-height; layout önce; tüm eşleşen p’ler taranır | DEP-015/016 |
| TECH-010 | index.html:L1273 ve devamı view=program/nilufer/decision QA yardımcıları | CMP-05 | Eski #journey hedefi mevcut DOM’da yok; bazı modlar sadece önceki sahneleri gizler. Parametreli ekran görüntüsü normal landing/eksiksiz section kanıtı sayılmaz | P2 | CONFIRMED statik gözlem / QA REVIEW / OLD | Final görsel QA parametresiz tam akışta; yardımcı modlar ayrıca eşlenirse doğru sahneler | — |

## Kabul kontrol sözlüğü

Her F12/F14 kaydı kendi kaynak cümlesi + aşağıdaki kontrolü birlikte sağlamalı. Böylece genel kontrol kodu tekil isteğin yerine geçmez.

| Kod | Doğrulama ölçütü |
|---|---|
| VR-VISUAL | Kaynakta korunması istenen kompozisyon/statement var; yeni bir görsel onay varsayılmadı; Ekin tasarım incelemesi. |
| VR-READ | Plus Jakarta Sans ana arayüz fontu; SF/NB yok; koşullu Newsletter serif aktif değil; Hero grafik istisnaları ve logo sınırı korunur. Workbook yoğun metin yaklaşımıyla body-first hiyerarşi (test referansı: Başlık: 30px/38px, Gövde: 18px/28px, Paragraf aralığı: 18px, Başlık-gövde aralığı: 16px; tüm siteye zorunlu dayatılmaz, brifteki 19–20px yeni standart sayılmaz); final genişliklerde okunabilirlik, kırpılma ve hiyerarşi kontrolü. |
| VR-HERO | Sol dört bir gün örneği; sağ tam başlık, F14-L007 tam cümle, küçük EVDEKİ SES imzası ve F14-L009 CTA; F14-L010 yasakları hero alanında yok; mobil örnekler sonuçtan önce. |
| VR-INTRO | F14-L012 yeni sıra birebir; krem kart tepesinde F14-L013 turuncu etiket; F14-L014 ikinci cümle birebir; geri kalan onaylı metin kayıpsız. |
| VR-RECOG | Biraz daha araştırdın. tek nokta; el yazısı okunur; görsel/görselsiz yön DEP-014 ile kararlaştırılmış. |
| VR-SOUND | İki sütun/akış ferah, tüm metin erişilebilir; tesir cümlesi birebir ve belirgin; en az bir ses/müzik pratiği görseli uygun yerde. |
| VR-WEEKS | 00 giriş + 01–06; yedi giriş/navigasyon hedefi sağlam; altı output ilk harfi büyük; body/overlay okunur; FAQ sekiz cevapla doğru eşleşir; watermark yok. |
| VR-CTA | Yolculuk sonu–Program öncesi kısa CTA; header/hero/kapanış doğru hedefe gider; SEC-23 satın alma düğmesi kendine kaydırmak yerine doğrulanmış checkout’a gider; başvuru/onay akışı yok. |
| VR-PROGRAM | Eski SEC-16–19 birleşir; tam 10 görünür, tıklamasız kart; F14-L018–027 başlık/metinleri aynen; kendi malzemen çalışma yükü F14-L017 girişinde; kartların içeriği erişmek için hover/tap gerekmez; Ritmi bundan sonra. |
| VR-RHYTHM | Metronom ve içerik korunur; hareket azaltma statik görseli çalışır; okunabilirlik artırılır; olduğu gibi ifadesinin kapsamı DEP-020 ile belirlenir. |
| VR-FIT | F12-L078 ve L079 iki ankraj; aradaki onaylı body eksiksiz; metin sayfasına dönüşen sıkışıklık yok. |
| VR-BIO | Gerçek davullu fotoğraf korunur; biyografi kopyası eksiksiz; body ferah; daha fazla için gerçek ve klavyeyle erişilebilir link, uydurma URL yok. |
| VR-TESTIMONIAL | Tam dört gerçek yorum, Aslınur/Esma/Ceren/Özge; ilk isim + kısa bağlam ve web kullanım izni kanıtı; Nilüfer sonrası/fiyat öncesi; Evdeki Ses sonucu iddiası yok; başlık ayrıca onaylı. |
| VR-PRACTICAL | F14-L033 değer cümlesi birebir; gerçek Nilüfer fotoğrafı; doğru takvim; 15.500 TL mevcut referans; üç taksit ancak DEP-009 kapanınca; kısa hukuk metni DEP-010; soru kapısı asıl satışın yerine geçmez. |
| VR-LEGAL | Yetkili onaylı kısa iade/cayma satırı ile checkout ön bilgilendirme/mesafeli satış ve gerekli onaylar tutarlı; kendi başımıza hukuki koşul üretmedik. |
| VR-IMAGE | Kaynak/lisans/izin ve yeterli çözünürlük kanıtı; final desktop/mobil crop kontrolü; Unsplash+ watermark yok; filigran rötuşla silinmez; kaldırılmış Program panellerine yeni stock üretilmez. |
| VR-FAQ | 7 bağlamsal buton + final all erişimi, 8 cevap; ID, soru ve doğru cevap eşleşir; açık bölüm/modal kararı kaydedilmiş; Escape, kapatma, odak dönüşü ve klavye kontrolü. |
| VR-SUPPORT | Bütün görünür bölümlerde ve mobil/zoom’da body, CTA, FAQ üstüne binmiyor; gerçek destek mi FAQ mı davranışı Ekin tarafından belirlenmiş. |
| VR-DATE | Başlangıç 11 Kasım 2026; 11/18/25 Kasım + 2/9/16 Aralık, Çarşamba 19.30–21.30; kayıt kapanışı 10 Kasım 2026 23.59; bitiş 16 Aralık; aktif metin/metadata içinde eski başlangıç veya kapanış yok. |
| VR-META | F14-L042 tam meta description; paylaşım alanları varsa aynı yetkili metne bağlı; og:image/URL ve final yayın adresi onaylı; title/lang/mobil head kontrolü. |
| VR-PAYMENT | Kartra üç taksit, maliyet, toplam ve taksit tutarı Ekin tarafından doğrulanmış; doğrulanmadıkça UI’da yeni seçenek yok. |
| VR-COPY | 01_PUBLIC_COPY’nin yeni feedbackle değişmeyen her bloğu korunmuş; yalnız DEC kayıtlı açık değişiklikler; yeni testimonial, ürün iddiası, URL veya hukuki metin üretilmemiş. |

Responsive/erişim QA için önerilen checkpointler: 360/390px mobil, 768/1024px geçiş, 1440/1920px masaüstü; kısa viewport, büyütülmüş metin ve %200 zoom; klavye ile tüm içeriğin sonuna erişim; hareket azaltma modu. Bunlar bu fazda çalıştırılmadı ve zorunlu tasarım breakpointleri değildir. Snapshot/ekran kanıtı olmadan CODE Test edildi olmaz.

## Bölüm handoff alanları — R0001 sözleşmesi korunur

SEC/REV/F12/F14/DEC/DEP; mevcut HTML-CSS-JS hedefi; kaynak sürümü ve PDF sayfası/artboard adı; onaylı tam metin; kolon/hiza/boşluk/katman; gerçek font/ağırlık/boyut/satır/harf aralığı; renk ve varlık/crop; etkileşim/CTA hedefi; mobil referans veya açık karar; onaylayan/tarih/kapsam; uygulama sonrası desktop/mobil/erişim kanıtı. Eksik ölçü veya font görüntüden tahmin edilip kesin veri yazılmaz.

## Section 1 tasarım incelemesine hazır mı?

**EVET — gereksinim ve kaynak karşılaştırması için hazır.** SEC-01 → PDF1; F12 §3 ve mobil sıra; F14-L005–010; DEC-009; SUPERSEDED hero alternatifleri açık. Kesin kopya/yasaklar mevcut.

**Final tasarım onayı veya kodlamaya hazır kabulü: HAYIR.** İmzanın görünümü/yerleşimi, son font/görsel lisansı, mobil düzen ve ölçüler DEP-008/015/016 ile review/varlık doğrulaması bekliyor. Yeni tasarım burada yapılmadı. Uygulamaya geçiş ayrıca yetkilendirilmeli; bu faz belge güncellemesi ve coverage raporunda durur.


# R0003 — Bölüm kabul sözleşmesi

Bu şema yalnız revizyon sistemini işletir; tasarım/uygulama yapıldığı anlamına gelmez. Her SEC-01–28 için SECTION_TRACKER’daki iki fazlı A–F hücreleri kontrol listesidir. Bir kontrolün tam anahtarı SEC-xx.DESIGN.A1 veya SEC-xx.CODE.A1.

DESIGN fazı onaylanacak tasarım/kopya/etkileşim planını inceler; CODE fazı gerçek uygulamayı ve test kanıtını inceler. Özellikle DESIGN.F4 test planıdır, CODE.F4 gerçek tarayıcı testidir. Tasarım fazı kontrolünün geçmesi, kod eşleniğine PASS taşımaz.

## 27 kontrolün faza özgü kabul kriterleri

| Kontrol | Konu | DESIGN kabulü | CODE kabulü |
|---|---|---|---|
| A1 | Latest approved copy | Son yetkili kopya ve açık F14 değişiklikleri tasarım metin dökümünde kaynaklı | Onaylı kopya gerçek DOM/görünür içerikle birebir; eksik/ek iddia yok |
| A2 | October 12 feedback | İlgili tüm F12 kayıtları tasarım çözümüne/korumaya bağlanmış | İlgili F12 kapsamı kodda çözülmüş; korunacak parçalar test edilmiş |
| A3 | October 14 feedback | İlgili F14 kayıtları yeni yön ve kesin kopyayla uygulanacak şekilde çözülmüş | İlgili F14 maddeleri gerçek uygulamada doğrulanmış |
| A4 | Dates and program facts | DEC-019 tarihleri ve diğer onaylı ürün gerçekleri doğru; hero yasakları gözetilmiş | Görünen/gizli metinler ve ilgili metadata doğru; doğrulanmamış ödeme/hukuk yok |
| A5 | Superseded exclusion | SUP-01–10 içinden bu bölümü etkileyen eski kapsam tasarıma taşınmamış | Geçersiz talimat kodda aktif davranış/metin değil; korunan kısmi kapsam mevcut |
| B1 | Body size and line-height | Plus Jakarta Sans üzerinde Workbook body-first yaklaşımıyla body/satır yüksekliği okunur; ölçüler rehber, tahmin veri değil; SF/NB kullanılmaz | Plus Jakarta Sans gerçekten yüklenmiş; computed font/line-height ve Türkçe glif/ağırlık doğrulanmış; CSS cascade veya fallback ezmiyor |
| B2 | Paragraph/block spacing | Paragraf ve bloklar rahat; metne fiziksel alan ayrılmış | Gerçek viewport ve içerikte aralıklar çalışıyor; sığdırmak için küçültme yok |
| B3 | Text width | Workbook yaklaşımıyla yoğun metin sütunu ve satır uzunluğu rahat; yaklaşık 50–70 karakter yalnız rehber; sığdırmak için font küçültme yok | Plus Jakarta Sans metrikleriyle final sütun genişliği ve satır kırılımları okunur; yatay taşma veya gizli içerik yok |
| B4 | Headline/body hierarchy | Plus Jakarta Sans başlık/statement/body ölçekleri dengeli; Hero el yazısı/özel grafik istisnası ve logo sınırı korunmuş; Newsletter serif onaysız kullanılmamış | Uygulama onaylı hiyerarşiyi Plus Jakarta Sans ile koruyor; SF/NB kalıntısı ve onaysız serif yok; istisnalar yalnız tanımlı kapsamda |
| B5 | Contrast/photo overlays | Final zemin/görsel üstünde bütün metin ve kontroller okunur | Gerçek crop/overlay/aktif-pasif durumlarda kontrast kontrol edilmiş |
| C1 | Illustrator/reference reconciliation | PDF sayfası + yeni karar farkı açık; olmayan sayfa gerekçeli; PDF varlığı onay değil | İzlenen tasarım sürümü ve ilgili kaynak eşlemesi kodla tutarlı |
| C2 | Visual hierarchy | Kompozisyon ve odak sırası Ekin incelemesine sunulmuş | Onaylı görsel hiyerarşi uygulanmış, izinsiz yeniden yorum yok |
| C3 | Image quality/licensing | Gerçek varlık/crop/çözünürlük/lisans kanıtlı; filigran yok | Kullanılan dosya onaylı/lisanslı, final cihazlarda keskin ve filigransız |
| C4 | Adjacent-section consistency | Önceki/sonraki bölümle ritim, tipografi ve birleşme sınırı tutarlı | Komşu bölüm geçişleri, header/arka plan ve UNIT-PROGRAM bütünlüğü çalışıyor |
| D1 | Desktop | Masaüstü yerleşim ve içerik sırası incelenmiş; kanıtlı referans var | Masaüstü tarayıcıda test edilmiş; viewport ve kanıt kayıtlı |
| D2 | Tablet | Tablet adaptasyonu ve sıra kararı açık; onaysız otomatik varsayım yok | Tablet boyutlarında gerçek render ve etkileşimler test edilmiş |
| D3 | Mobile | Mobil hiyerarşi, sıra ve kontroller incelenmiş; hero örnekleri önce | Mobil tarayıcı/viewport test edilmiş; metin/kontrol gizlenmiyor |
| D4 | Overflow/content accessibility | Uzun metin/kısa yükseklik/zoom akışı ve snap davranışı planı eksiksiz | 100vh/snap/overflow ile içerik kilitlenmiyor; zoom ve son satıra erişim testli |
| E1 | CTA | CTA metni/konumu/hedefi ve doğrudan checkout mantığı onaylı | CTA gerçek doğru hedefe gider; self-anchor satın alma işlevi sayılmaz |
| E2 | Navigation | İç bağlantı/hedef/sıra ve sticky header ilişkisi tanımlı | Mouse/touch/klavye navigasyonu ve doğru hedef görünürlüğü testli |
| E3 | FAQ | İlgili soru-cevap ve merkezi erişim kararı eşli | FAQ doğru cevabı açıyor; kapatma/Escape/odak/scroll davranışı çalışıyor |
| E4 | Forms/widgets/overlap | Form/destek gerçek işlevi ve metinleri, yerleşim ve örtüşmeme şartı tanımlı | Form/widget gerçek akışı ve body/CTA/FAQ üstüne binmeme bütün boyutlarda testli |
| F1 | Matches approved design | Tasarım sürümü, karar kapsamı ve onay için gösterilecek çıktı sabitlenmiş | Kod onaylı tasarım sürümüyle karşılaştırılmış; kanıtlı fark incelemesi var |
| F2 | No broken layout/functionality | Tasarımdaki durumlar/akışlar eksiksiz; uygulanamaz çelişki yok | Bozuk layout/kontrol, eksik varlık veya işlev hatası yok; ilgili console/ağ hataları incelenmiş |
| F3 | Accessibility basics | Okuma sırası, başlıklar, alt metin, klavye/odak ve hareket azaltma gereksinimleri tanımlı | Semantik/alt metin/klavye/odak ve uygulanabilir reduced-motion kontrolleri yapılmış |
| F4 | Browser verification | Ekin’in kabul edeceği tarayıcı/cihaz planı ve test kanıtı biçimi tanımlı; gerçek test iddiası değil | Onaylı tarayıcı planı gerçekten çalıştırılmış; tarayıcı/sürüm/viewport/tarih/kanıt kayıtlı |
| F5 | SEO/sharing when applicable | İlgili head/paylaşım metni ve varlık/URL sorumluluğu tanımlı | İlgili title/lang/meta/OG ve paylaşım gereksinimleri onaylı kaynağa uygun; kapsam dışıysa gerekçeli N/A |

Her kontrol yalnız PASS / FAIL / BLOCKED / NOT APPLICABLE / NOT TESTED. PASS kanıt ve sürüm ister; NOT APPLICABLE gerekçe, kapsam, onaylayan/tarih ister. Bilinmiyorsa NOT TESTED veya gerekli girdi eksikse BLOCKED; N/A ile geçiştirilmez. Body ölçüleri önceki dokümandaki inceleme rehberidir, bu aşamada uygulanmış veya onaylanmış font ölçüsü değildir.

## Uygulama ve tasarım kanıtının sınırı

Önce 27 DESIGN kontrolü/ilgili feedback/karar/DEP kapsamı ve Ekin tasarım onayı; sonra ayrıca yetkili uygulama ve 27 CODE kontrolü + gerçek tarayıcı testleri + Ekin uygulama onayı. Closure algoritması MASTER R0003; gerçek kayıtlar TRACKER GATE/kanıt/yerel çözüm tablosu. Kaynaklar ve eski onaylar global değişiklikte çöpe atılmaz; yalnız RC ile etkilenen kontrol ve onay kapsamı açılır.

# R0003 — SEC-01 / Hero tasarım review paketi

## Kaynaklar ve başlangıç durumu

- Mevcut kod: **index.html:L50 #hero**; tipografi/yerleşim styles.css ve ilgili main.js navigasyonu. Bunlar mevcut ESKİ landing referanslarıdır; dosyalar bu fazda yeniden konsolide edilmedi veya değiştirilmedi.
- Illustrator: **revision/references/illustrator-latest.pdf sayfa 1**; inceleme referansı, final onay değil.
- Geçerli müşteri kararı **DEC-009 / F14-L005–010**; operasyonel süreç DEC-022–026; kaynak kesinliği ile çizim onayı ayrı.
- DESIGN STATUS **REVIEWED — CLIENT APPROVAL PENDING** (gate class: **REDESIGN REQUIRED**): Ekin organik eğimi ve aşağıdaki mesaj hiyerarşisini tercih etti. F14-L008 küçük imza için imzasız çözüm DEC-027 kapsamında önerilen istisnadır; Nilüfer onayı yok. CODE STATUS **NOT IMPLEMENTED**; mevcut kod **OLD** baseline’dır. Hero VERIFIED değildir.

### Bütün aktif yerel/global aday feedback ID’leri

F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L025, F12-L026, F12-L028, F12-L030, F12-L032, F12-L033, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L131, F12-L133, F14-L005, F14-L006, F14-L007, F14-L008, F14-L009, F14-L010, F14-L042.

Her ID özgün 152 satırlık envantere ve yerel çözüm günlüğüne bağlıdır. Bazı kayıtlar sayfa geneli veya head/metadata konusudur; Hero içine meta kopyası veya bütün global görsel repertuvarı zorlanmaz. Doğrudan etki dışıysa ancak gerekçeli/onaylı yerel kapsam kararı verilir. Ses bölümüne özgü F12-L039–042 ve F14-L040 Hero işi olarak eklenmez.

### Geçersiz eski talimatlar / korunacak kapsam

F12-L027 → SUP-01; F12-L029 → SUP-01; F12-L031 → SUP-02; F12-L128 → SUP-09. Tam superseded kapsam aktif yapılacak iş değildir; 14 Ekim kesin kopyası üstündür. Genel okunabilirlik ve F12-L032 mobil örnek/sonuç sırası korunur.

### 14 Ekim Hero sözleşmesi (önceki kesin kopya korunur)

Solda bir gün listesi. Sağ okuma sırası: **NE ZAMANDIR** → **“Bir Gün”** → **DİYORSUN?** → **“Bir gün” dediğin şeyi dünyayla buluştur.** → **Evdeki Ses’e Katıl**. Sonuç cümlesi sorunun altında; CTA onunla ilişkili konumdadır. Illustrator’daki hafif eğik, organik kompozisyon bilinçli tasarım tercihidir ve düzleştirilmez. **EVDEKİ SES** küçük imza talebi F14-L008 olarak aktiftir; imzasız deneme yalnız DEC-027 önerilen istisnasıdır. Hero’da sınırlı kontenjan, 10 kişi, 6 hafta, Nilüfer Ormanlı’dan veya program tanımı olmayacak. Bu bilgilerin ikinci ekrandaki yeri DEC-010’dur, tüm sayfadan silinmez.

### Önceki okunabilirlik / global kontrol bağları

F12-L014–021, ilgili hero sadeleşmesi L025/026/032/033 ve global özet L130/131; B1–B5 ve G-01–G-08. Yaklaşık tipografi/satır uzunluğu hedefleri yalnız review rehberi; font ailesi, gerçek ağırlık, sayısal ölçü veya onay bu fazda icat edilmedi. Global 16 kuralın tamamının yerel bağları GLOBAL-SEC-01 satırında.

### Bilinen açık girdiler / kararlar

- DEP-008: final görsel/kullanım hakkı ve lisans kaydı; temiz kaynak doğrulanmalı.
- DEP-015: gerçek font/ağırlık/lisans/yüklenebilir kaynak ve ölçü kanıtı; bilinmeyenler UNVERIFIED.
- DEP-016: masaüstünde organik eğim ve sağ mesaj sırası Ekin tarafından tercih edildi. Mobilde örneklerin sonuç cümlesinden önce gelmesi kesin; tablet/mobil yerleşim ve F14-L008 imza istisnası için Nilüfer onayı henüz yok.
- DEP-011: Hero CTA’nın onaylı hedefi ve checkout kapsamıyla tutarlılık; gerçek URL/akış doğrulaması gerekliyse kapanmadan CODE VERIFIED yok.
- DEP-021: ortak head/paylaşım görseli/URL sorumluluğu; description kesin, varlıklar açık. Yerel etki sınıfı kaydedilecek.
- DEP-026/027/028: kontrol/test kanıtları, ayrı Ekin onayları ve güncel global sürüm doğrulaması yok. Bunlar süreç kurulmuş diye tamamlanmış sayılmaz.

## Hero — tasarım ve uygulama kabul listeleri

Aşağıdaki iki sütun bağımsız checklisttir; güncel sonuçlar ve kanıtlar yalnız tracker’daki tam kontrol ID’lerinden okunur. Şu anda tüm Hero kontrolleri NOT TESTED; hiçbir tasarım ya da uygulama kabulü verilmedi.

| Kontrol | Hero DESIGN kabulü | Hero CODE kabulü | Sonuç kayıtları |
|---|---|---|---|
| A1 | F14-L006/007/009 kesin hero metni ve noktalama; sol dört bir gün örneği; F14-L008 küçük imza veya Nilüfer’in açıkça onayladığı DEC-027 istisnası; yeni kamu metni üretme | Aynı onaylı metin ve sol örnekler görünür uygulamada mevcut; SVG alt metni tek başına görünür örnek kanıtı değil | SEC-01.DESIGN.A1 / SEC-01.CODE.A1 |
| A2 | Aktif 12 Ekim ve global okunabilirlik maddeleri için yerel çözüm/koruma kaydı | Her ilgili F12 kaydı SEC-01.CODE çözüm/kanıtına bağlı | SEC-01.DESIGN.A2 / SEC-01.CODE.A2 |
| A3 | F14-L005–010 tam kompozisyon ve hero yasakları; F14-L008 ancak Nilüfer onaylı istisnayla dışarıda kalabilir | Sağ başlık/sonuç/CTA ve onaylı imza kararı uygulanmış; yasak format/10 kişi/6 hafta/program tanımı hero alanında yok | SEC-01.DESIGN.A3 / SEC-01.CODE.A3 |
| A4 | Hero’da yasak tarih/format katmanı türetme; görünen ürün gerçeği varsa DEC-019/ücret kararına uygun | Hero ve paylaştığı header/head’de eski tarih veya doğrulanmamış ödeme iddiası yok | SEC-01.DESIGN.A4 / SEC-01.CODE.A4 |
| A5 | SUP-01/02 hero eski format ve süre cümlesi; ilgili SUP-09 meta ertelemesi aktif değil | Eski format mesajı ve altı hafta içinde hero cümlesi kodda geri gelmemiş | SEC-01.DESIGN.A5 / SEC-01.CODE.A5 |
| B1 | Ana UI metinleri Plus Jakarta Sans; Hero el yazısı/özel marka grafikleri istisna; ölçü uydurma, önce yerleşim | Plus Jakarta Sans yüklenmiş ve computed ölçüler onaylı tasarımla eşli; SF/NB kalıntısı yok; fallback incelenmiş | SEC-01.DESIGN.B1 / SEC-01.CODE.B1 |
| B2 | Paragraf ve bloklar rahat; metne fiziksel alan ayrılmış | Gerçek viewport ve içerikte aralıklar çalışıyor; sığdırmak için küçültme yok | SEC-01.DESIGN.B2 / SEC-01.CODE.B2 |
| B3 | Metin sütunu ve satır uzunluğu rahat; yaklaşık 50–70 karakter yalnız rehber | Final sütun genişliği ve satır kırılımları okunur; yatay taşma yok | SEC-01.DESIGN.B3 / SEC-01.CODE.B3 |
| B4 | Sağ okuma sırası DEC-027 ile aynı; sonuç sorunun altında, CTA sonuçla ilişkili; küçük imza kullanılırsa ana mesajı bastırmıyor | Gerçek fontlarla onaylı hiyerarşi uygulanmış; imza varsa ayrı ana mesaj gibi davranmıyor | SEC-01.DESIGN.B4 / SEC-01.CODE.B4 |
| B5 | Final zemin/görsel üstünde bütün metin ve kontroller okunur | Gerçek crop/overlay/aktif-pasif durumlarda kontrast kontrol edilmiş | SEC-01.DESIGN.B5 / SEC-01.CODE.B5 |
| C1 | Mevcut #hero ile PDF1 ve F14 farkları; PDF1 varlığı onay değil | Onaylanmış yeni Hero sürümüyle karşılaştır; PDF’yi körlemesine kopyalama | SEC-01.DESIGN.C1 / SEC-01.CODE.C1 |
| C2 | Hafif eğik organik kompozisyon düzleştirilmeden korunmuş; Ekin’in tercih ettiği odak ve mesaj sırası görünür; Nilüfer onayı kayıtlı | Onaylı organik kompozisyon ve görsel hiyerarşi uygulanmış, izinsiz yeniden yorum yok | SEC-01.DESIGN.C2 / SEC-01.CODE.C2 |
| C3 | Fotoğraf/crop/font kullanım hakları ve kaynakları; mevcut asset otomatik onaylı değil | Gerçek kullanılan fotoğraf/font kaynak ve kalite/lisans kaydı mevcut | SEC-01.DESIGN.C3 / SEC-01.CODE.C3 |
| C4 | Önceki/sonraki bölümle ritim, tipografi ve birleşme sınırı tutarlı | Komşu bölüm geçişleri, header/arka plan ve UNIT-PROGRAM bütünlüğü çalışıyor | SEC-01.DESIGN.C4 / SEC-01.CODE.C4 |
| D1 | Masaüstü yerleşim ve içerik sırası incelenmiş; kanıtlı referans var | Masaüstü tarayıcıda test edilmiş; viewport ve kanıt kayıtlı | SEC-01.DESIGN.D1 / SEC-01.CODE.D1 |
| D2 | Tablet adaptasyonu ve sıra kararı açık; onaysız otomatik varsayım yok | Tablet boyutlarında gerçek render ve etkileşimler test edilmiş | SEC-01.DESIGN.D2 / SEC-01.CODE.D2 |
| D3 | F12-L032: sol örnekler sonuç cümlesinden önce; son mobil yerleşim Ekin review bekliyor | Mobil görsel ve DOM okuma sırası aynı gereksinimi karşılıyor; metin/CTA erişilebilir | SEC-01.DESIGN.D3 / SEC-01.CODE.D3 |
| D4 | Uzun metin/kısa yükseklik/zoom akışı ve snap davranışı planı eksiksiz | 100vh/snap/overflow ile içerik kilitlenmiyor; zoom ve son satıra erişim testli | SEC-01.DESIGN.D4 / SEC-01.CODE.D4 |
| E1 | Evdeki Ses’e Katıl metni ve hedef/checkout kapsamı açıkça belirlenmiş; URL uydurma | Onaylı hedef gerçek çalışıyor; fiyat alanına scroll ile satın alma işlevini karıştırma | SEC-01.DESIGN.E1 / SEC-01.CODE.E1 |
| E2 | İç bağlantı/hedef/sıra ve sticky header ilişkisi tanımlı | Mouse/touch/klavye navigasyonu ve doğru hedef görünürlüğü testli | SEC-01.DESIGN.E2 / SEC-01.CODE.E2 |
| E3 | İlgili soru-cevap ve merkezi erişim kararı eşli | FAQ doğru cevabı açıyor; kapatma/Escape/odak/scroll davranışı çalışıyor | SEC-01.DESIGN.E3 / SEC-01.CODE.E3 |
| E4 | Form/destek gerçek işlevi ve metinleri, yerleşim ve örtüşmeme şartı tanımlı | Form/widget gerçek akışı ve body/CTA/FAQ üstüne binmeme bütün boyutlarda testli | SEC-01.DESIGN.E4 / SEC-01.CODE.E4 |
| F1 | Tasarım sürümü, karar kapsamı ve onay için gösterilecek çıktı sabitlenmiş | Kod onaylı tasarım sürümüyle karşılaştırılmış; kanıtlı fark incelemesi var | SEC-01.DESIGN.F1 / SEC-01.CODE.F1 |
| F2 | Tasarımdaki durumlar/akışlar eksiksiz; uygulanamaz çelişki yok | Bozuk layout/kontrol, eksik varlık veya işlev hatası yok; ilgili console/ağ hataları incelenmiş | SEC-01.DESIGN.F2 / SEC-01.CODE.F2 |
| F3 | Okuma sırası, başlıklar, alt metin, klavye/odak ve hareket azaltma gereksinimleri tanımlı | Semantik/alt metin/klavye/odak ve uygulanabilir reduced-motion kontrolleri yapılmış | SEC-01.DESIGN.F3 / SEC-01.CODE.F3 |
| F4 | Ekin’in kabul edeceği tarayıcı/cihaz planı ve test kanıtı biçimi tanımlı; gerçek test iddiası değil | Onaylı tarayıcı planı gerçekten çalıştırılmış; tarayıcı/sürüm/viewport/tarih/kanıt kayıtlı | SEC-01.DESIGN.F4 / SEC-01.CODE.F4 |
| F5 | F14-L042 exact description head/paylaşım sahipliği; Hero’nun içinde ek teklif mesajı değildir | Head meta kaynakla aynı; paylaşım varlığı/URL için DEP-021 değerlendirilmiş | SEC-01.DESIGN.F5 / SEC-01.CODE.F5 |

**Review sonucu: REVIEWED — CLIENT APPROVAL PENDING.** Ekin organik kompozisyonu ve mesaj hiyerarşisini tercih etti; sonuç cümlesinin noktası kesin. F14-L008 imzasız istisna Nilüfer onayı bekliyor. **DESIGN APPROVED: NO. CODE VERIFIED: NO.** Mevcut kod eski baseline’dır; yeni kararlar uygulanmadı.
