# EVDEKİ SES — HUKUKİ METİNLER VE OPERASYON SENKRONİZASYON KÜTÜĞÜ (LEGAL SYNC LOG)

**Tarih:** 26 Ekim 2026 · Europe/Istanbul  
**Kaynak Depo (Operations Repository):** `evdekises-legal-operations` (`/Users/ekinyasa/Documents/ChatGPT/Nilüfer Ormanlı/evdekises-legal-operations`)  
**Fiziksel Handoff Kaynağı:** `/Users/ekinyasa/Documents/Nilufer/Evdeki-legal/` (25 Ekim 2026 Word/ZIP orijinalleri)  
**Hedef Geliştirme/Önizleme Deposu:** `/Users/ekinyasa/Documents/Coding/projects/evdekises-antigrv-landing`

---

## 1. KAYNAK VE SAYFA EŞLEME MATRİSİ

| Operations Kaynağı | Kaynak Dosya SHA-256 | İlgili Madde Kodları | Hedef Metin Dosyası (Markdown) | Hedef Önizleme Sayfası (HTML) | Landing Bileşeni / Konum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `review/2026-10-25/v1/01_LANDING.md` | `48e50f11cc63ff00a3be940217a71a47ce1314f34b441d88503fbaf531be6894` | L01–L10 | `legal-docs/katilim-kosullari.md` & `legal-docs/on-bilgilendirme.md` | `legal/katilim-kosullari.html` | `index.html` Pratik Bilgiler (#karar), SSS (#faqModal), Kapanış ekranı (#kapanis), Footer |
| `review/2026-10-25/v1/02_CHECKOUT.md` | `aae0fae2fa0ef32dba0775dff6804eb0914e41b5ecb54f91eff389978ff7a086` | C01–C07 | `legal-docs/on-bilgilendirme.md` & `legal-docs/mesafeli-satis-sozlesmesi.md` | `legal/on-bilgilendirme.html` & `legal/mesafeli-satis.html` | `index.html` #checkoutModal (Doğru Checkout Simülasyonu & Onay Kutuları) |
| `review/2026-10-25/v1/07_UYGULAMA_BRIFI.md` | `add40b17f94ea905cc0998d741d074a046da883e5648fc5fa629c29456603bca` | P1–P42 | `legal-docs/LEGAL_SYNC_LOG.md` | `legal/index.html` | Tüm yasal belgeler ve modal gezintisi |
| `LEGAL_METINLER.md` & `LEGAL_CERCEVE.md` | — | Çerçeve & Boşluklar | `legal-docs/gizlilik-politikasi.md` & `legal-docs/cerez-politikasi.md` | `legal/gizlilik.html` & `legal/cerez.html` | Footer L10 bağlantıları & Çerez Tercih Modalı |

---

## 2. MADDE BAZINDA MUTABAKAT VE UZLAŞTIRMA TABLOSU

| Madde Kodu | Tanım | 25 Ekim Çalışma Taslağı Hükmü | Mevcut Onaylı Karar (F14 / DEC) | Uzlaştırma ve Uygulama Durumu |
| :--- | :--- | :--- | :--- | :--- |
| **L01** | Tarih ve Takvim | 11 Kasım 2026 başlangıç; 11, 18, 25 Kasım ve 2, 9, 16 Aralık canlılar (19.30–21.30 TSİ); 10 Kasım 2026 23.59 son kayıt. | `DEC-019` ve F14-L046–049 ile tam uyumlu. | **UZLAŞTI.** `index.html` ve kapanış ekranındaki eski 4 Kasım / 3 Kasım tarihleri güncellendi. |
| **L02** | Aktif Katılım | Kamera ve mikrofonla katılım beklenir; zorlama yok, geçici kapatma hakkı var. | `Evdeki_Ses_Ekin_Ana_Program_Akisi` ile uyumlu. | **UZLAŞTI.** Pratik Bilgiler ve Katılım Koşulları metnine işlendi. |
| **L03** | 18 Yaş Sınırı | Yalnızca 18 yaşını doldurmuş yetişkinler; reşit olmayanlar kabul edilmez. | `COHORT_VARSAYIMLARI.md` ile uyumlu. | **UZLAŞTI.** Pratik Bilgiler katılım maddelerine ve sözleşmelere işlendi. Ek doğum tarihi alanı istenmiyor. |
| **L04** | Kayıt ve Erişim | 11 Kasım 2026’da başlar; öncesinde açılmaz. Erişim 15 Ocak 2027 saat 23.59 TSİ’de biter. | `DEC-019` takvimi + 30 gün ek materyal erişimi kuralı ile tam örtüşüyor. | **UZLAŞTI.** Pratik Bilgiler ve sözleşmelere 15 Ocak 2027 olarak işlendi. |
| **L05** | Kayıt Alınmaması | Canlı buluşmalar kaydedilmez; kaçırılan oturumun kaydı veya telafi hakkı yoktur. | `01_PUBLIC_COPY.md` ve SSS ile birebir uyumlu. | **UZLAŞTI.** Mevcut kural korundu; katılımcıların da kayıt yapamayacağı yasağı sözleşmelere eklendi. |
| **L06** | Hizmet Sınırları | Terapi, tıbbi tedavi veya kriz desteği değildir; sonuç garantisi verilmez. | `02_PRODUCT_TRUTH.md` §19 ile birebir uyumlu. | **UZLAŞTI.** Pratik Bilgiler ve SSS'ye sakin ve net bir şekilde eklendi. |
| **L07** | Fiyat ve Taksit | [PLACEHOLDER A — Kesin fiyat ve para birimi], [PLACEHOLDER B — Ödeme modeli]. | F14-L032 (3 taksit isteği), `DEC-014` (Doğrulanmış: 15.500 TL peşin, 2 × 8.500 TL). | **UZLAŞTI.** Mevcut doğrulanmış 15.500 TL ve 2 taksit korundu; 3 taksit operasyonel teyit gelene kadar `[AÇIK KARAR]` olarak tutuldu. |
| **L08** | İptal ve İade Notu | Fiyat kartı altında Ön Bilgilendirme ve Mesafeli Satış Sözleşmesi'ne atıf; zorunlu tüketici hakları saklıdır; hello@niluferormanli.studio. | F14-L034, `DEC-014` ve `DEP-010`. | **UZLAŞTI.** Fiyat kartı altına onaylı kısa metin yerleştirildi; tam metinler sözleşmelere bağlandı. |
| **L09** | Referans Yorumlar | Önceki çalışmalara ait yorumlar; Evdeki Ses sonucu gibi sunulmaz. | F14-L030 ve `DEP-006`. | **UZLAŞTI.** Bölüm izin doğrulamaları (`[PLACEHOLDER C]`) tamamlanana kadar beklemede tutulmaktadır. |
| **L10** | Footer Bağlantıları | Gizlilik Politikası · Katılım Koşulları · Ön Bilgilendirme · Mesafeli Satış Sözleşmesi · Çerez Tercihleri · İletişim. | `F14` ve L10. | **UZLAŞTI.** Footer linkleri ve gezinme modalı bu 6 başlığa uyarlandı. |

---

## 3. AÇIK KARARLAR VE BEKLEYEN İNCELEMELER (OPEN ITEMS / PLACEHOLDERS)

Aşağıdaki maddeler uydurulmamış olup, profesyonel inceleme (Nilüfer, hukukçu ve mali müşavir) için `[AÇIK KARAR]` olarak etiketlenmiştir:

1. **[AÇIK KARAR P-A]:** Fatura/tahsilat para birimi (TL / USD) ve KDV/satış vergisi dökümünün doğrulanması.
2. **[AÇIK KARAR P-B]:** Kartra/Stripe üzerinde 3 taksit modelinin banka taksiti mi yoksa ayrı çoklu tahsilat mı olduğu ve ek komisyon maliyeti.
3. **[AÇIK KARAR P-C]:** Referans yorumların (Aslınur, Esma, Ceren, Özge) yayın kanalı ve isim kullanım izinlerinin Nilüfer tarafından teslimi.
4. **[AÇIK KARAR P-D & P-H]:** ABD LLC üzerinden Türkiye’ye yapılan hibrit satışta 6502 sayılı yasa m. 15 cayma istisnası onay kutucuğu metninin hukukçu tarafından kesinleştirilmesi.
5. **[AÇIK KARAR P-G]:** AI asistan ve destek kayıtlarının teknik veri saklama süresinin sağlayıcı API koşullarıyla uyumlaştırılması.

---
*Bu kayıt, yerel geliştirme ve önizleme ortamında tam tutarlılık sağlamak amacıyla güncellenmiştir.*

---

---

## 4. PR #6 LANDING COPY SENKRONİZASYONU (2026-10-26 · v0.1)

**Paket:** `landing-L01-L10-2026-10-26-v0.1` (Kaynak: `evdekises-legal-operations/pull/6`)  
**Durum:** `DRAFT` — Tasarım, geliştirme ve yerel önizleme amaçlıdır; Nilüfer veya avukat nihai onayı DEĞİLDİR.  
**Canlı Satış / Yayın:** YETKİLENDİRİLMEDİ (Yalnızca yerel test ortamı).

### Uygulanan Maddeler
- **L01 (Program Takvimi):** Pratik Bilgiler (#karar) saat dilimi, tam buluşma tarihleri (yıl ekli), son kayıt saati ve kapanış ekranı (#kapanis) 11 Kasım 2026 olarak güncellendi.
- **L02 (Katılım Beklentisi):** #karar ve #faq-item-katilim içerisinde kamera/mikrofon beklentisi, kişisel deneyim zorunluluğu olmaması ve geçici kapatma hakkı sen diliyle uygulandı.
- **L03 (18 Yaş Koşulu):** #karar ve #faq-item-katilim içerisinde yalnızca 18 yaşını doldurmuş yetişkinlere açık olduğu ve yaş altı katılımın kapsam dışı olduğu netleştirildi.
- **L04 (Erişim Süresi):** #karar ve #faq-item-asistan içerisinde 11 Kasım 2026’da başlayacağı, öncesinde açılmayacağı ve 15 Ocak 2027 23.59 TSİ’de erişimin sona ereceği işlendi.
- **L05 (Canlı Kayıt ve Devamsızlık):** #karar ve #faq-item-00 içerisinde canlı oturumların kaydedilmeyeceği, bireysel telafi sunulmayacağı, kayıtlı materyallerin bundan ayrı olduğu ve bir oturumu kaçırmanın kalan program erişimini kaldırmayacağı uygulandı.
- **L06 (Hizmet Sınırı):** #karar ve #faq-item-terapi içerisinde psikoterapi/tıbbi tedavi/kriz desteği olmadığı, teşhis konulmadığı ve belirli bir dönüşüm garantisi verilmediği işlendi.
- **L07 (Fiyat ve Ödeme - Layout & Placeholders):** #karar fiyat bölümünde onaylanmamış peşin/taksit metinleri kaldırıldı; görsel düzen [PLACEHOLDER P-A] ve [PLACEHOLDER P-B] olarak ölçülendirildi.
- **L08 (İptal ve İade Kısa Notu):** #karar fiyat altında Ön Bilgilendirme Metni ve Mesafeli Satış/Hizmet Sözleşmesi bağlantılarıyla güncellendi.
- **L09 (Referans Yorum Açıklaması - Layout & Placeholders):** #karar ile #kapanis arasına yeni #referanslar bölümü eklendi; yasal açıklama metni kartların üstünde konumlandırıldı, kartlar [PLACEHOLDER P-C] tasarım yer tutucusu olarak korundu.
- **L10 (Footer Bağlantıları):** #kapanis ve mobil menüde ön bilgilendirme, mesafeli satış/hizmet sözleşmesi, [İptal ve İade] placeholder öğesi, katılım koşulları, gizlilik, çerez tercihleri ve iletişim adresi uygulandı.
