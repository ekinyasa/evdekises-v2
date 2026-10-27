# Açık Bağımlılıklar

16 Ekim 2026 · R0003 · [Ana envanter](REVISION_MASTER.md)

Gerekli kaynakların tamamı mevcut: mevcut uygulama, üç temel MD, PDF, F12, F14 ve beş tracking dosyası okundu. Kaynak okundu demek son tasarım onaylandı veya operasyon test edildi demek değildir. Eksik varlık/kararlar aşağıda ayrı. Süre veya sorumlu taahhüdü uydurulmadı; sahipler yanıtı sağlayabilecek rollerdir.

| ID | Durum | Gereken / konu | Sahip | Kaynak / kapatma kanıtı | Etki / sınır |
|---|---|---|---|---|---|
| DEP-001 | CLOSED — zorunlu kaynak alındı | 14 Ekim feedbackinin aslı | Ekin / kaynak sahibi | references/nilufer-feedback-2026-10-14.md; 49 kaynak satırı, 38 kayıt okundu; eski bekleniyor durumu kapandı | Yeni kararlar DEC-009–021 ve F14 envanterinde |
| DEP-002 | PARTIAL — PDF alındı; üretim varlıkları PENDING | Son Illustrator PDF + .ai/font/bağımsız varlık | Ekin | illustrator-latest.pdf 25/25 sayfa; PDF tasarım onayı değildir; .ai/artboard isimleri ve gerektiğinde ölçü/font kaynağı henüz yok | Kaynak envanteri/PDF eşlemesi tamam; kod handoff’u için ölçü/varlık gerekebilir |
| DEP-003 | READ VERIFIED / kalıcı yazma bağlantısı teyitsiz | Work erişimi ve ortak klasör | Ekin / uygulama ayarı | Bu faz yerel okuma çalıştı; R0001 dosyaları Ekin manuel kopyaladı; işlem izni kalıcı proje erişimi sayılmaz | Bu fazın belge yazımı uygulama izin sınırına tabi; yeni yetki varsayılmaz |
| DEP-004 | PARKED — bu faz kapsam dışı | GitHub paylaşım/yayın düzeni | Ekin | R0001’de origin vardı; bu faz Git işlemi yok; uzak güncellik/yayın tetikleyicisi test edilmedi | Envanter veya bölüm incelemesini engellemez; otomatik push yok |
| DEP-005 | PARTIAL — tarih çözüldü, diğer operasyonlar teyit bekliyor | 3 Ekim operasyon listesinin güncelliği | Ekin / ilgili yetkili | Takvim DEC-019 ile kesin; gerisi aşağıdaki DEP-009/010/011/019/022/023 ile ayrıştırıldı | Eski listedeki açık kutular çözülmüş olabilir; bugünkü gerçek engel diye uydurulmaz |
| DEP-006 | PENDING | Aslınur, Esma, Ceren, Özge gerçek yorumları; ilk isim/bağlam/izin; bölüm başlığı | Ekin / Nilüfer | F14-L030 metinleri ayrıca göndereceğini söylüyor; asıl alıntılar bu üç yeni kaynakta yok; F12-L093 izin süreci, tamamlanmış kanıt değil | SEC-26 içerik/uygulama; dört kart düzeni review edilebilir |
| DEP-007 | PENDING | Pratik Bilgiler için Nilüfer’in göndereceği fotoğraf | Ekin / Nilüfer | F14-L035; bağımsız yeni dosya bu kaynak paketinde yok. Mevcut portre otomatik seçilmez | SEC-23 final görsel/crop/onay |
| DEP-008 | PENDING | Hafta3 temiz lisanslı kaynak veya alternatif; kullanılan görsellerin lisans/izin kayıtları | Ekin görsel sahibi | F12-L049/115; F14-L038; PDF13 filigranı görsel olarak mevcut. Filigran rötuşla silinmez; lisanslı temiz asıl veya değişim | SEC-12 finali ve G-12; hero dahil tüm görsellerin hak kontrolü |
| DEP-009 | PENDING / UNVERIFIED | Kartra üç taksit teknik imkânı, maliyet, toplam ve taksit tutarları | Ekin / ödeme altyapısı yetkilisi | F14-L032/045; OPS L8–14,L24–30; istek gerçek ödeme seçeneği değildir | SEC-23 üç taksit gösterimi ve checkout; mevcut tutarlardan yeni plan türetilmez |
| DEP-010 | DRAFT REVIEW IN PROGRESS / PREVIEW IMPLEMENTED | Yetkili iade/cayma özeti, ön bilgilendirme, mesafeli satış, checkbox ve politika | Ekin / yetkili hukuk-operasyon / Nilüfer | 25 Ekim kaynakları bulundu (`Evdeki-legal` ve `evdekises-legal-operations`). 5 hukuki metin taslağı (`legal-docs/`) ve önizleme sayfaları (`legal/`) hazırlandı. L08 iade notu ve C02/C03/C04 checkout akışı önizleme ortamında yerine kondu; bağımsız hukukçu onayı bekleniyor | SEC-23 + Footer + Checkout; canlı satış için onay bekleyen açık kararlar işaretli |
| DEP-011 | PENDING | Gerçek checkout URL ve uçtan uca doğrudan satın alma | Ekin / operasyon | OPS L12,L31–35; mevcut fiyat CTA href=#karar kendi alanına dönüyor | Header/hero/ara CTA/Pratik/kapanış yolunun final QA’sı; başvuru/onay eklenmez |
| DEP-012 | PENDING | Soru formu hedefi, alanlar/iletişim/mahremiyet akışı ve Canlı Destek gerçek davranışı | Ekin ürün / operasyon | F12-L102–104; F14-L039. Widget şu an FAQ all açar; gerçek destek bağlantısı yok. Yeni form/servis/URL uydurulmaz | SEC-28 + CMP-03; kaynak başlık/alt metin handoff’ta aynen |
| DEP-013 | PENDING Ekin kararı | SSS açık bölüm mü, bağlamsal sorular + merkezi modal mı? | Ekin + Work | F12-L119–121; F14 çözmüyor; 7 buton/8 cevap statik eşleşmesi SECTION_TRACKER’da | SEC-25 son sunum; FAQ içeriği ve mapping korunur |
| DEP-014 | PENDING Ekin kararı | Belki başladın görseli değişsin mi, PDF3’teki görselsiz yön mü? | Ekin + Work | F12-L035 görsel değişimi; PDF3 siyah/görselsiz; tam onay kaydı yok | SEC-03 final yönü; el yazısı fikri ve kontrast korunur |
| DEP-015 | PENDING üretim doğrulaması | PDF font aileleri/ağırlıkları, lisans ve gereken yüklenebilir dosyalar | Ekin / tasarım sahibi | PDF fontları çıkarılabilir ama onaylı .ai/font listesi yok; CSS NB International Pro tanımlı, head’de yüklenmiyor; yerel ekinBOHO.woff2 mevcut | SEC-01 başta olmak üzere metrik/kopya eşleşmesi; font var diye kullanım hakkı varsayılmaz |
| DEP-016 | PENDING tasarım review | Mobil/responsive artboard ve son ölçüler; Program grid; Ses bir/iki ekran; PDF12 kutu sabitleme noktası | Ekin + Work | PDF masaüstü 1441.72×795.886 ve 1441.72×756.921; mobil sayfa yok; grid F14’te Ekin’e bırakılmış | Final responsive handoff; bu faz yeni düzen tasarlamıyor |
| DEP-017 | PENDING görsel review | Ses/müzik repertuvarı; PDF12 yüz aydınlatma önerisi; son crop/çözünürlük | Ekin + Work | F12-L043–044,116–117; PDF12 yüz aydınlanabilir PROPOSED. Davullu gerçek fotoğraf var; koşulu karşılayıp karşılamadığı review | G-06/G-12; otomatik yeni stock eklenmez |
| DEP-018 | PENDING copy QA / yetkisiz farklar aktifleşmez | PDF ile public copy arasında izin verilmemiş kelime/örnek farkları | Ekin + Work / uygulama QA | PDF5 Bir metin eksik ve istediğin/istediği; PDF20 araştırmalarıması; PDF24 çift nokta. F14’ün değişmediği alanında COPY üstün | Kaynak bütünlük kontrolü; yeni yazım onayı varsayılmaz |
| DEP-019 | PENDING güncellik/operasyon testi | Kontenjan kapanışı/bekleme listesi, Kartra onboarding, 30 gün materyal erişimi, ilk hafta unlock | Ekin / operasyon | OPS L31–47,L100–107; kesinleşmiş olabilir ama bu kaynaklarda test kanıtı yok. Takvim ileri kaydı; unlock gününü tahmin etme | Checkout/üyelik üretim hazırlığı; landing tasarım review’sunu gereksiz yere durdurmaz |
| DEP-020 | PENDING Ekin yorumu | Programın Ritmi olduğu gibi kalsın kapsamı | Ekin + Work | F14-L028 koruma; F12-L070–073 okunabilirlik/hiyerarşi düzeltmesi. Koruma ile polish birlikte kayıtlı | SEC-20 metronom/içerik korunur; piksel onayı çıkarılmaz |
| DEP-021 | PENDING varlık/yayın bilgisi; description CONFIRMED | OG/Twitter paylaşım görseli, final URL/canonical ve önizleme | Ekin yayın / tasarım | F14-L042 exact description; mevcut head description eski, OG/Twitter/canonical yok. Yayın adresi uydurulmaz | G-14 / TECH-005; bu faz yayın veya ağ testi yok |
| DEP-022 | PENDING operasyon güncellik teyidi | AI asistanı mahremiyet/toplu içgörü modeli ve Yaratıcı Ses Haritası | Ekin / Nilüfer / teknik yetkili | OPS L60–76: özel konuşma açılmaması, dosyalar aynı gizlilik çerçevesi, anonim/toplu raporun beş sorusu, indirilebilir/doldurulabilir tek belge, kişisel cihazda saklama, isteğe bağlı AI yükleme; PRODUCT §16/17 | Landing yeni kart kopyası dışına operasyon garantisi eklenmez; yeni sistem tasarlanmaz |
| DEP-023 | PROPOSED / üretimde açık içerik ayrıntıları | Ders/pratik süre-sayı-sıra/medya; canlı dakika planı; workbook/Harita son hâli; AI prompt mimarisi | Nilüfer / Ekin | PRODUCT §22/L395–406 açıkça sabit kabul etmeyin diyor; Günlük Akort tam metin/ses üretimi de henüz üretilecek | Final müfredat gibi satış vaadi türetilmez; F14 exact kart metinleri korunur |
| DEP-024 | PARKED — final landing blockerı değil | İlk cohort sonrası vergi/SGK ve işletme değerlendirmesi | Ekin / yetkili mali danışman | OPS L93–99: GVK20/B, Bağ-Kur/4-b, Stripe→Mercury, gerçek giderler/devamlılık değerlendirmesi | Kaynak konusu kaybolmadı; bu faz hukuki/mali tavsiye veya altyapı işi yapmıyor |

## R0001’den taşınan açıklamalar

Aktif yerel yol Ekin tarafından verildi ve yeniden okunarak doğrulandı. Başlangıçta bulunan Coding/projects/claude/evdekises vb. klasörler aktif kaynak değil. Üç taksit, yorumlar, hukuk, checkout ve unlock daha önce de bekliyordu; eski açık kutu bugünkü gerçek durumun kanıtı değildir. Bu faz bunları çözüldü veya kesin engel diye tahmin etmedi.

Takvim açık bağımlılık değildir: DEC-019 CONFIRMED. Kaynaklar eski tarih taşısa da 11 Kasım başlangıç/10 Kasım kapanış/16 Aralık son canlı üstündür. Eski kaynaklar ve kod bu görevde değiştirilmedi.

Bir DEP kapatıldığında tarihli yanıt, gerçek dosya/URL veya onay/test kanıtı eklenir; eski kayıt silinmez. CONFIRMED müşteri talebi, PENDING uygulama bilgisiyle aynı satırda açıkça ayrılır.


# R0003 — Bölüm kapısı için bağımlılık işletimi

Açık kaynak/varlık/operasyon konuları aynen korunur; hardening bunları çözülmüş saymaz. Mevcut DEP-001 CLOSED, DEP-004 PARKED vb. durumlar, bölümün gerçekten hangi fazını etkilediği sınıflanmadan keyfi blocker/otomatik muafiyet yapılmaz. SECTION_TRACKER SCOPE tablosu her bölümün aday bağımlılıklarını açıkça listeler; kesin REQUIRED/NON-BLOCKING değerlendirmesi yerel DEP kaydında yapılır.

| ID | Durum | Gereken | Sahip | Kapatma / geçme kanıtı |
|---|---|---|---|---|
| DEP-025 | UNVERIFIED bölüm bazlı Illustrator tamamlanmışlığı | Yalnız UNVERIFIED DESIGN satırlarında PDF’nin hangi revizyon işini tamamladığı ve hangi açık yeni talebin kaldığı | Ekin + Work | Bölüm, kaynak/sürüm ve gerçek fark; onay ayrı. PDF varlığı tek başına tamamlandı değildir |
| DEP-026 | NOT TESTED — süreç hazır, gerçek uygulama testi yok | Her bölümün DESIGN test planı ve CODE kabul/test kanıtları | Ekin + Work / ayrıca yetkilendirildiğinde Antigravity | Tracker 27 kontrol/faz, gereken kanıt, tarayıcı/sürüm/viewport ve tarih. DESIGN planı gerçek CODE testi sayılmaz |
| DEP-027 | PENDING — verilmiş onay 0 | Her bölüm için ayrı Ekin DESIGN ve CODE onayı | Ekin | Milestone, tasarım/kod sürümü, kapsam, onaylayan, tarih ve kanıt. Müşteri gereksinimi CONFIRMED olması çizim/uygulama onayı değil |
| DEP-028 | FRAMEWORK READY; bölüm sürüm kanıtı PENDING | GB-0001/G-01–16 sürüm değerlendirmesi ve gerçek global değişiklikte hedefli recheck | Ekin + Work / uygulama QA | Her SEC’de güncel global bağ ve sürüm kanıtı; gerçek GCH için RC kapsamı kapalı. Şu anda gerçek global değişiklik/RC 0 |

## Etki sınıflandırması / geçerli erteleme

Her DEP için yerel anahtar **DEP + SEC + DESIGN/CODE**. Sınıf REQUIRED / NON-BLOCKING / DEFERRED NON-BLOCKING; sınıf/etki bilinmiyorsa UNVERIFIED ve closure kapalı.

REQUIRED açık ise ilgili milestone geçmez. DEFERRED NON-BLOCKING yalnız mevcut bölümün gerçek tamamlanmasını etkilemeyen konuya verilir. Zorunlu alanlar: DEP, SEC/faz, etkilemediğinin somut gerekçesi, sahip, takip checkpointi, Ekin’in açık onayı/tarihi. Sadece sonra bakarız gerekçesi geçersizdir. Bekleyen görsel bu bölümde kullanılacaksa, checkout bağlantısı bu bölümün kabul şartıysa veya hukuki metin bu bölümde yayımlanacaksa bunlar etkisiz diye ertelenemez.

İlgisiz ödeme/ürün üretim işi her tasarım review’ını durdurmaz; fakat gerçekten geçerli bölüm kabulünü etkileyen iş dışarı itilmez. Bir bağımlılığın başka bölümde açık kalması, bu bölümde kanıtlı ve onaylı etki dışı kapsamını kendiliğinden bozmaz. Başlangıçta verilmiş erteleme yok.

| Yerel anahtar | Etki sınıfı | Gerekçe | Sahip | Takip checkpointi | Ekin onayı/tarih | Kontrol/kapı bağı |
|---|---|---|---|---|---|---|

Bu tabloya gerçek karar olmadan veri satırı yazılmadı. Yerel uygulanabilirlik kayıtlarının asıl yeri SECTION_TRACKER’dır; burası kurallar ve proje bağımlılık kaynaklarıdır. İki yerde çelişkili yerel durum tutulmaz. Kapanan DEP’nin kanıtı silinmez; yeni global karardan etkilenen erteleme gerekçesi RC ile tekrar değerlendirilir.

---

## 27 Ekim 2026 — PR #13 Implementation Readiness Audit Düzeltmeleri (Yerel Prototip)

| Bulgu ID | PR #13 Orijinal Test Tanımı | Durum | Yerel Prototip Düzeltmesi | Kalan İş / Gerçek Sistem Ayrımı |
|---|---|---|---|---|
| **AUD-01** (AG-01) | **LOCAL-10 / QA-08:** Yerel simülasyon etiketi ve simüle submitte kayıt/e-posta teyidi gösterilmesi (PR #13 FAIL) | **RESOLVED IN PROTOTYPE** | "Kaydın tamamlandı / e-posta gönderildi" yanıltıcı mesajları kaldırıldı. `checkout-simulation-banner` eklendi; T01 (Başarı), İşlemde, T02 (Beklemede), Başarısız durumları ayrıştırıldı. Ad ve e-posta zorunlu alan doğrulaması eklendi. | Gerçek ödeme/kayıt/e-posta zinciri (Stripe, Kartra, Cognilink) üretim ortamında bağlanacaktır. |
| **AUD-02 / AUD-03** (AG-02) | **LOCAL-12** (Metin Eşitlemesi) / **QA-02** (Fiyat/Satıcı) / **QA-05** (Tam Belge/Özet) (PR #13 FAIL) | **LOCAL-12: RESOLVED; QA-02/05: OPEN / BLOCKED** | 15.500 TL peşin / 2 × 8.500 TL tutarları yerel tasarım önizlemesinde korundu (P-A/P-B). Hukuki modal içine Aday Taslak banner'ı yerleştirildi; ön bilgilendirme ve mesafeli satış metinlerindeki erken ifa ve cayma hakkı kesin hükümleri PR #11 aday diline çekildi; modal özetleri (AI asistan, çerez durumu) tam belgelerle eşitlendi (Alt Kontroller: **PASS**). | Gerçek satış için yetkili hukuk ve vergi danışmanı onayı beklenmektedir (**OPEN / BLOCKED**). |
| **AUD-04** (AG-03) | **LOCAL-11 / QA-26:** İlk ziyaret çerez tercihleri ve 3P tracker engellemesi (PR #13 FAIL) | **RESOLVED IN PROTOTYPE** | Çerez modalında zorunlu olmayan kategoriler (`cookieFunc`, `cookieAnalytics`) ilk ziyarette varsayılan olarak **KAPALI (unchecked)** hale getirildi. Modal açıldığında senkronizasyon sağlandı. 3P tracker ağ filtrelemesinin yerel prototipte bulunmadığı (`NOT_IMPLEMENTED`) açıkça belgelendi. | Gerçek GA4 / Meta Pixel izleyicileri eklendiğinde ağ düzeyinde koşullu yükleme mimarisi kurulacaktır. |
