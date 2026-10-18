# Bölüm Takibi

16 Ekim 2026 · R0003 · [Ana envanter](REVISION_MASTER.md)

## Sayım ve durum ayrımı

Mevcut DOM: 23 section + kapanış/footer = **24 akış bölümü**. Eski R0001’in SEC-25 FAQ’sı bir modal, SEC-26 testimonial’ı kaynakta istenmiş fakat henüz yoktur. 26 kayıt veya 25 PDF sayfası final bölüm sayısı değildir. Mevcut SEC-01–26 kimlikleri korunmuştur.

Tüm kod ESKİ feedback sürümü. PDF’de yeni çalışma var; hiçbiri sadece PDF’de var diye onaylanmadı. CONFIRMED aşağıdaki DEC atıflarındaki gereksinim içindir; R0003 DESIGN STATUS aşağıdaki bölüm satırlarında ve operasyon defterinde ayrı tutulur. CODE eski/uygulanmamış; bu fazda uygulama/test yok.

## Mevcut sayfa sırası ve kaynak eşlemesi

F12 = references/readability-feedback.md (12 Ekim); F14 = references/nilufer-feedback-2026-10-14.md (14 Ekim). § numarası kaynaktaki numaralı başlık, L kaynak satırıdır. Global kurallar bütün satırlara uygulanır. Kesin tekil F12/F14 kimlikleri REVISION_MASTER envanterindedir.

| ID | Bölüm | Mevcut kod | PDF sayfası | 12 Ekim kaynağı | 14 Ekim kaynağı | Geçerli karar/koruma | DESIGN | CODE | Eksik / değişiklik / çatışma |
|---|---|---|---|---|---|---|---|---|---|
| SEC-01 | Hero | index.html:L50 #hero | 1 | F12 §3; L25–33; global §2 | F14 §1 L5–10 | DEC-009, DEC-027 | REVIEWED — CLIENT APPROVAL PENDING (gate class: REDESIGN REQUIRED); Ekin kompozisyon/hiyerarşi tercihi kayıtlı, Nilüfer onayı yok | NOT IMPLEMENTED (mevcut kod OLD) | Organik eğim korunur; F14-L008 küçük imza talebi aktif, imzasız çözüm önerilen istisna; mobil sıra / font / lisans kontrolü açık |
| SEC-02 | Beyaz ikinci ekran | index.html:L112 #giris-anlatisi | 2 | F12 L6; COPY L28–43 | F14 §2 L12–14 | DEC-010 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | Yeni sıra, krem kart, turuncu etiket ve ikinci cümle |
| SEC-03 | Belki başladın | index.html:L150 #recognition | 3 | F12 L7,L22,L35–37 | F14 L37 | DEC-020 | DESIGN BLOCKED; evidence/completion kayıtlı, onay yok | OLD | Görsel değişimi mi yoksa PDF’deki görselsiz yön mü? DEP-014 |
| SEC-04 | Yöntem statementi | index.html:L196 #method | 4 | F12 L8,L20–21 | Ayrı yeni karar yok; F14 genel düzeltmeleri | DEC-021 | ILLUSTRATOR REVISED — NOT IMPLEMENTED; evidence/completion kayıtlı, onay yok | OLD | Beyaz PDF ile koyu kod yönünün görsel onayı; okunabilirlik |
| SEC-05 | Biçim kazanma / senden çıkar | index.html:L252 #inside-world | 5 | F12 L9,L20–21 | Ayrı yeni karar yok | DEC-021 | ILLUSTRATOR REVISED — NOT IMPLEMENTED; evidence/completion kayıtlı, onay yok | OLD | PDF’de eksik Bir metin; istediğin/istediği farkı; PDF-003 |
| SEC-06 | Karşılaşma | index.html:L301 #encounter | 6 | F12 §2 | Ayrı yeni karar yok | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | İki sütun, hiyerarşi ve mobil akış |
| SEC-07 | Altı haftanın sonunda | index.html:L329 #culmination | 7 | F12 §2 | Ayrı yeni karar yok | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Statement ve tüm metnin erişilebilirliği |
| SEC-08 | Ses / tesir | index.html:L348 #conceptual-scene | 8 + 9 | F12 §5 L39–44 | F14 L40 | DEC-016 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | İki PDF sayfası tek section; boşluk ve vurgu; bölme kararı açık |
| SEC-09 | Yolculuk girişi / 00 | index.html:L452 #hafta-0 | 10 | F12 §6 L46–53 | F14 L38 yalnız hafta3; genel kurallar geçerli | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Giriş ekranı, 0. hafta değil; tek bir şey / ona bağı korunur |
| SEC-10 | 1. hafta — İzi Duymak | index.html:L483 #hafta-1 | 11 | F12 §6 L46–53 | Genel kurallar; yeni hafta kopyası yok | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Output büyük harf; FAQ; overlay |
| SEC-11 | 2. hafta — Aynı Şey, Başka Kılıklarda | index.html:L519 #hafta-2 | 12 | F12 §6 L46–53; PDF s12 notları | Genel kurallar; yeni hafta kopyası yok | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Kutu sabitlenecek; yüz aydınlanabilir PROPOSED; PDF-001/002 |
| SEC-12 | 3. hafta — Kemiklere Şarkı Söylemek | index.html:L555 #hafta-3 | 13 | F12 L49,L115; §6 | F14 L38 | DEC-017 | DESIGN BLOCKED; evidence/completion kayıtlı, onay yok | OLD | Unsplash+ lisanslı temiz kaynak veya değişim; DEP-008 |
| SEC-13 | 4. hafta — Parçaların Birbirini Bulduğu Yer | index.html:L591 #hafta-4 | 14 | F12 §6 | Genel kurallar | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Output büyük harf; FAQ; mobil |
| SEC-14 | 5. hafta — Kapıyı Kapatmak | index.html:L627 #hafta-5 | 15 | F12 §6 | Genel kurallar | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Output büyük harf; FAQ; mobil |
| SEC-15 | 6. hafta — Karaya Çıkmak | index.html:L663 #hafta-6 | 16 | F12 §6 ve §7 L55–58 | Genel kurallar | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Output büyük harf; ardından SEC-27 CTA |
| SEC-16 | Program A | index.html:L700 #program | 17 | F12 §8 L60–68 | F14 §3 L16–27 | DEC-011 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | SEC-16–19 tek 10 kart sistemine birleşecek; eski DOM hedefleri geçişte eşlenir |
| SEC-17 | Program B | index.html:L744 #program-pratikler | 18 | F12 §8 | F14 §3 L16–27 | DEC-011 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | Fotoğraf paneli SUPERSEDED; yeni kart kopyaları F14-L018–027 |
| SEC-18 | Program C | index.html:L786 #program-c | 19 | F12 §8 | F14 §3 L16–27 | DEC-011 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | Kendi malzemen bölümü yeni girişe taşınır; sessiz içerik kaybı kontrolü |
| SEC-19 | Program D | index.html:L827 #program-d | 20 | F12 §8 L68,L114 | F14 §3 L16–27 | DEC-011 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | Fotoğraf kaldırma; PDF’deki araştırmalarıması yazımı taşınmaz |
| SEC-20 | Programın Ritmi | index.html:L874 #program-ritim | 21 | F12 L10; §9 L70–73 | F14 L28 | DEC-012 | DESIGN BLOCKED; evidence/completion kayıtlı, onay yok | OLD | Metronom korunur; okunabilirlik iyileştirmesi piksel eşitliği değildir, DEP-020 |
| SEC-21 | Bu program sana uygun mu | index.html:L903 #uygunluk | 22 | F12 §10 L75–80 | Ayrı yeni karar yok | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | İki cümle ankraj; ara body ferah; kopya korunur |
| SEC-22 | Nilüfer biyografi | index.html:L935 #nilufer | 23 | F12 L11; §11 L82–85 | F14 L30 yeni bölümün bunun sonrasına konumu | DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | Davullu fotoğraf korunur; daha fazla metni span, link URL yok: TECH-003 |
| SEC-23 | Pratik Bilgiler / ücret | index.html:L981 #karar | 24 | F12 §13–14 L95–110 | F14 §5 L32–35; L44–49 | DEC-014, DEC-015, DEC-019 | REDESIGN REQUIRED; evidence/completion kayıtlı, onay yok | OLD | Yeni Nilüfer fotoğrafı; değer cümlesi; ödeme/hukuk ve tarih |
| SEC-24 | Kapanış / footer | index.html:L1083 #kapanis | 25 | F12 L12; §16 L119–120 | F14 L49; kesin takvim L46–48 | DEC-019, DEC-021 | UNVERIFIED; evidence/completion UNVERIFIED | OLD | 11 Kasım; FAQ merkez; yasal footer kararı |

## Henüz olmayan bölümler / akış dışı bileşenler

| ID | Yer / mevcut karşılık | Kaynak ve karar | DESIGN | CODE | Eksik |
|---|---|---|---|---|---|
| SEC-25 | #faqModal index.html:L1129; akış dışı 8 cevap | F12-L052,119–121; DEC-020 | DESIGN BLOCKED | OLD | DEP-013; sekiz cevap korunacak |
| SEC-26 | Yeni testimonial; SEC-22 hemen sonrası / SEC-23 öncesi | F12-L087–093; F14-L030; DEC-013 | DESIGN BLOCKED | NOT IMPLEMENTED | DEP-006; PDF’de sayfası yok |
| SEC-27 | Yeni kısa CTA; SEC-15 sonrası / birleşik Program öncesi | F12-L055–058,L134; DEC-021 | REDESIGN REQUIRED | NOT IMPLEMENTED | DEP-011; PDF’de sayfası yok; geçiş metni onaysız üretilemez |
| SEC-28 | Yeni soru/iletişim kapısı; fiyat/pratik bilgiler çevresi | F12-L102–104,L135; DEC-020 | DESIGN BLOCKED | NOT IMPLEMENTED | DEP-012; PDF’de sayfası yok |
| CMP-01 | #siteHeader index.html:L19 | F12-L055; F14 hero/ikinci ekran ayrımı; TECH-001 | REVIEW | OLD | 6 Hafta linki #inside-world; doğru giriş #hafta-0 Ekin review/QA |
| CMP-02 | #journeyTracker index.html:L412; kesin linkler L416–440 | F12-L005,L050,L051 | KORU / REVIEW | OLD | Aktif/pasif renk, doğru 00–06 sıra, mobil erişim |
| CMP-03 | #liveChatAnchor/#liveChatBtn index.html:L1262–1263; main.js L241–306 | F12-L122; F14-L039; TECH-004 | REVIEW / PENDING ürün davranışı | OLD; şu an FAQ all açıyor | DEP-012; body ve alt kontrollerle örtüşme |
| CMP-04 | head index.html:L2–14 | F12-L127–128; F14-L042 | Description CONFIRMED | OLD | TECH-005; paylaşım görseli/URL DEP-021 |
| CMP-05 | Inline view=journey/program vb. QA kodu index.html:L1273 ve devamı | Teknik yardımcı, kullanıcı akışı değil | QA CHECKPOINT | OLD | Ana sayfa testleri parametresiz; gizlenen sahneler bölüm kaybı sanılmayacak |

Program birleşiminde eski dört ID ve bunlara bağlı navigasyon/JS referansları için geçiş eşlemesi yapılacak; final yeni ID uydurulup bu fazda kodlanmayacak.

## PDF sayfa kapsamı

25 sayfanın tamamı metin + görsel olarak incelendi. Sayfa10–16 raster: metin çıkarımı boş diye kaynak kayıp sayılmadı. Sayfa3’te PDF nesne katmanında önceki ekrandan metinler çıkarılabiliyor; sadece görünür tasarım yeni ekran içeriği sayılır.

| PDF | Mevcut bölüm | Görsel inceleme / son karar etkisi | Durum |
|---|---|---|---|
| PDF-01 | SEC-01 | Organik eğim ve sağ okuma sırası Ekin tarafından tercih edildi; sonuç cümlesi noktalı. F14-L008 küçük imza talebi aktif, imzasız deneme yalnız önerilen istisna; Nilüfer onayı bekliyor | MAPPED; DESIGN REVIEWED — CLIENT APPROVAL PENDING; CODE NOT IMPLEMENTED (mevcut kod OLD) |
| PDF-02 | SEC-02 | İkinci ekran eski sıra ve cümle: SUP-03/04; krem kart/etiket F14 ile yeni | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-03 | SEC-03 | Görselsiz siyah yön; metin çıkarımındaki önceki ekran parçaları görünür bölüm sanılmadı; DEP-014 | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-04 | SEC-04 | Beyaz yöntem ekranı, kod koyu; son renk yönü Ekin review | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-05 | SEC-05 | Gerçek davullu görsel; Bir metin eksik ve istediğin/istediği farkı PDF-003 | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-06 | SEC-06 | İki sütunlu karşılaşma; global okunabilirlik | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-07 | SEC-07 | Eşik statementi; yalnız varlığı onay değildir | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-08 | SEC-08 | Ses kavramsal giriş; tek kod sectionunun ilk parçası | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-09 | SEC-08 | Ses/tesir devam; aynı sectionun ikinci parçası | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-10 | SEC-09 | Raster overview, 00 giriş; görsel incelendi | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-11 | SEC-10 | Raster hafta1; output küçük harf, okunabilirlik | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-12 | SEC-11 | Raster hafta2; Kutu sabitlenecek ve yüz aydınlanabilir anotasyonları | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-13 | SEC-12 | Raster hafta3; görünür Unsplash+ filigranı | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-14 | SEC-13 | Raster hafta4; output/FAQ/okunabilirlik | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-15 | SEC-14 | Raster hafta5; output/FAQ/okunabilirlik | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-16 | SEC-15 | Raster hafta6; ardından yeni CTA eksik | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-17 | SEC-16 | Program A; eski panel tasarımı SUPERSEDED SUP-05/06 | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-18 | SEC-17 | Program B fotoğraf paneli SUPERSEDED | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-19 | SEC-18 | Program C fotoğraf paneli SUPERSEDED; kendi malzemen yeni girişe | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-20 | SEC-19 | Program D/laptop SUPERSEDED; araştırmalarıması typo PDF-004 | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-21 | SEC-20 | Metronom korunacak; animasyon kaynağı dosyada ayrıca mevcut | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-22 | SEC-21 | Uygunluk; iki ankraj ve body okunabilirliği | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-23 | SEC-22 | Nilüfer biyografi; gerçek fotoğraf, metin sıkışıklığı; yeni testimonial bunun sonrasına | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-24 | SEC-23 | Pratik bilgiler; eski takvim SUPERSEDED; stock görsel değişecek; çift nokta PDF-005 | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |
| PDF-25 | SEC-24 | Kapanış; eski 4 Kasım SUPERSEDED; merkezi SSS erişimi var | MAPPED; DESIGN STATUS: ilgili SEC kaydı; CODE OLD |

Eşlenmemiş PDF sayfası: **0**. Eşlenmemiş gerçek akış bölümü: **0**. Yeni testimonial/ara CTA/soru kapısının PDF’de görünmemesi açıkça kayıtlı; tamamlanmış tasarım kabul edilmez.

## FAQ eşleme matrisi — mevcut statik durum

| Ekran / erişim | Tetikleyici cevap ID | Modal öğesi | Kontrol |
|---|---|---|---|
| SEC-09 / hafta-0 L469 | faq-bulusma-kacirirsam | faq-item-00 L1150 | Başlık ve hedef statik eşli; tarayıcı PENDING |
| SEC-10 / hafta-1 L505 | faq-ne-calisacagimi-bilmiyorsam | faq-item-01 L1163 | Eşli; pedagojik yerleşim ayrıca review |
| SEC-11 / hafta-2 L541 | faq-ses-deneyimi | faq-item-02 L1176 | Eşli |
| SEC-12 / hafta-3 L577 | faq-bitirmek-gerekiyor-mu | faq-item-03 L1189 | Eşli |
| SEC-13 / hafta-4 L613 | faq-sanatci-olmak | faq-item-04 L1202 | Eşli |
| SEC-14 / hafta-5 L649 | faq-zaman-ayirmak | faq-item-05 L1215 | Eşli |
| SEC-15 / hafta-6 L685 | faq-partner-calismasi | faq-item-06 L1228 | Eşli |
| Final all L1102 | all | Sekiz cevabın tamamı | Asistan cevabı faq-item-asistan L1241 yalnız merkezi erişimde |
| Canlı Destek main.js son dinleyici | all | Aynı modal | Gerçek canlı destek entegrasyonu değildir; DEP-012 |

SSS’nin açık bölüm veya modal kalması kararı F12’de açık bırakılmış, F14’te çözülmemiştir; iki çözümden biri sessizce onaylanmadı.

## PDF anotasyonları ve kopya farkları

| ID | Kaynak / konum | Bölüm | İşlem | Öncelik | Karar / DESIGN / CODE | Kabul | Bağımlılık |
|---|---|---|---|---|---|---|---|
| PDF-001 | PDF s12 Kutu sabitlenecek | SEC-11 | Kutunun neye göre sabitleneceğini Ekin ile tanımla; responsive boyunca görsel hiza kontrolü | P1 | PENDING kapsam / REVIEW / NOT_IMPLEMENTED | Referans noktası ve taşmayan masaüstü/mobil davranış onaylı | DEP-016 |
| PDF-002 | PDF s12 yüz aydınlanabilir | SEC-11 | Yüz aydınlatma önerisini değerlendir; otomatik onay sayma | P1 | PROPOSED / REVIEW / NOT_IMPLEMENTED | Ekin’in görsel kararı ve korunmuş metin kontrastı | DEP-017 |
| PDF-003 | PDF s5; COPY L082 | SEC-05 | PDF’de Bir metin. yok; işinin kendi istediğin yerine kaynak istediği. Yetkisiz kopya farkını taşımadan kaynakla eşle | P1 | CONFIRMED copy integrity / REVIEW / OLD | Kaynakta onaylı tüm örnekler + tam kelime; yeni değişiklik onayı yok | DEP-018 |
| PDF-004 | PDF s20 Haftanın araştırmalarıması | SEC-19 → unified | PDF’deki yazım hatasını yeni karta taşımama; F14-L022 yetkili başlık | P1 | CONFIRMED F14 / REVIEW / NOT_IMPLEMENTED | Haftanın araştırmaları başlığı ve yeni metin birebir | — |
| PDF-005 | PDF s24 kayıt erken kapanır.. | SEC-23 | Kaynak/public copy’deki tek nokta korunur; PDF çift nokta taşınmaz | P1 | CONFIRMED copy integrity / REVIEW / OLD | Tek nokta, onaylı cümle | — |

## Bir sonraki bölüm güncellemesi

SEC + REV/feedback ID, tam kaynak/sürüm, artboard veya PDF sayfası, onaylayan kişi/tarih, DESIGN ve CODE ayrı, kabul ekranları, açık DEP birlikte güncellenir. Tasarımda zaten yapılmış iş kod aktarımından ayrı tutulur. Final tasarım sırası, özellikle SEC-08’in bir/iki ekran oluşu, Ekin review bekler.


# R0003 — Tek Geçiş Operasyonel Tracker

Bu alan R0002 kaynak eşlemelerini korur ve işletim için yetkilidir. Akış sayısı hâlâ 24; SEC-25 modal ve SEC-26–28 yeni istekler olmak üzere **28 izleme birimi** vardır. Yeni tracking dosyası yok. Her birimin 27 DESIGN + 27 CODE kontrolü aşağıda maddi hücre olarak kayıtlıdır: toplam **1512 sonuç hücresi**. Kontrol tanımları DESIGN_HANDOFF R0003 sözlüğündedir.

## Durum defteri

DESIGN STATUS yalnız OLD DESIGN / ILLUSTRATOR REVISED — NOT IMPLEMENTED / REDESIGN REQUIRED / DESIGN APPROVED / DESIGN BLOCKED; yetersiz kanıtta **UNVERIFIED**. Revizyon varlığı, tamamlanmışlık ve onay ayrı olgulardır. OLD DESIGN kod baseline’ını, DESIGN STATUS takip edilen son tasarım işinin durumunu gösterir. PDF var diye tamamlandı veya onaylandı yazılmaz. CODE: OLD / NOT IMPLEMENTED / IMPLEMENTED / TESTED / VERIFIED / RECHECK REQUIRED; bu faz hepsi eski/uygulanmamış.

| Kayıt | SEC | İş birimi | Kodun tasarım baseline’ı | DESIGN STATUS | Kanıt / tamamlanmışlık | CODE STATUS | Closure | Ekin DESIGN / CODE onayı | Global hedef / son doğrulanan |
|---|---|---|---|---|---|---|---|---|---|
| STATE-SEC-01 | SEC-01 | SEC-01 | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED; REVIEWED — CLIENT APPROVAL PENDING | Ekin organik kompozisyonu ve mesaj hiyerarşisini tercih etti; F14-L008 için imzasız çözüm PROPOSED EXCEPTION, Nilüfer onayı ve diğer kabul kanıtları eksik | NOT IMPLEMENTED (mevcut kod OLD) | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-02 | SEC-02 | SEC-02 | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-03 | SEC-03 | SEC-03 | OLD DESIGN — mevcut kod baseline | DESIGN BLOCKED | Gerekli karar/varlık açık; kısmi inceleme yapılabilir, DESIGN APPROVED verilemez | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-04 | SEC-04 | SEC-04 | OLD DESIGN — mevcut kod baseline | ILLUSTRATOR REVISED — NOT IMPLEMENTED | Revizyon farkı mevcut eşlemede kayıtlı; tamamlanmışlık/onay UNVERIFIED | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-05 | SEC-05 | SEC-05 | OLD DESIGN — mevcut kod baseline | ILLUSTRATOR REVISED — NOT IMPLEMENTED | Revizyon farkı mevcut eşlemede kayıtlı; tamamlanmışlık/onay UNVERIFIED | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-06 | SEC-06 | SEC-06 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-07 | SEC-07 | SEC-07 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-08 | SEC-08 | SEC-08 | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-09 | SEC-09 | SEC-09 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-10 | SEC-10 | SEC-10 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-11 | SEC-11 | SEC-11 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-12 | SEC-12 | SEC-12 | OLD DESIGN — mevcut kod baseline | DESIGN BLOCKED | Gerekli karar/varlık açık; kısmi inceleme yapılabilir, DESIGN APPROVED verilemez | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-13 | SEC-13 | SEC-13 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-14 | SEC-14 | SEC-14 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-15 | SEC-15 | SEC-15 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-16 | SEC-16 | UNIT-PROGRAM | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-17 | SEC-17 | UNIT-PROGRAM | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-18 | SEC-18 | UNIT-PROGRAM | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-19 | SEC-19 | UNIT-PROGRAM | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-20 | SEC-20 | SEC-20 | OLD DESIGN — mevcut kod baseline | DESIGN BLOCKED | Gerekli karar/varlık açık; kısmi inceleme yapılabilir, DESIGN APPROVED verilemez | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-21 | SEC-21 | SEC-21 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-22 | SEC-22 | SEC-22 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-23 | SEC-23 | SEC-23 | OLD DESIGN — mevcut kod baseline | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-24 | SEC-24 | SEC-24 | OLD DESIGN — mevcut kod baseline | UNVERIFIED | UNVERIFIED — PDF var; bölüm bazında revizyonun tamamlanmışlığı ve son onayı kanıtlı değil | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-25 | SEC-25 | SEC-25 | OLD DESIGN — mevcut kod baseline | DESIGN BLOCKED | Gerekli karar/varlık açık; kısmi inceleme yapılabilir, DESIGN APPROVED verilemez | OLD | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-26 | SEC-26 | SEC-26 | OLD DESIGN yok — yeni bölüm | DESIGN BLOCKED | Gerekli karar/varlık açık; kısmi inceleme yapılabilir, DESIGN APPROVED verilemez | NOT IMPLEMENTED | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-27 | SEC-27 | SEC-27 | OLD DESIGN yok — yeni bölüm | REDESIGN REQUIRED | CONFIRMED yeni değişiklik gereksinimi; son tasarım/onay henüz yok | NOT IMPLEMENTED | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |
| STATE-SEC-28 | SEC-28 | SEC-28 | OLD DESIGN yok — yeni bölüm | DESIGN BLOCKED | Gerekli karar/varlık açık; kısmi inceleme yapılabilir, DESIGN APPROVED verilemez | NOT IMPLEMENTED | NOT VERIFIED | MISSING / MISSING | GB-0001 / NONE |

SEC-04 ve SEC-05’te kayıtlı görsel fark, ILLUSTRATOR REVISED — NOT IMPLEMENTED durumunu destekler; tamamlanmışlık/approval yine UNVERIFIED. Diğer UNVERIFIED satırlarda hangi Illustrator işinin tamamlandığı ayrı kanıt gerektirir (DEP-025). DESIGN APPROVED sayısı 0; CODE VERIFIED sayısı 0.

## Yerel feedback ve bağımlılık kapsamı

Aşağıdaki ID listesi kaynak kaydını yeniden yazmaz. Her aktif ID için bu SEC ve faza ait çözüm kaydı gereklidir. Listelenen genel kurallar mevcut bölümde doğrudan etkili değilse kapsam dışılık gerekçesi/onayı kaydedilir; sessizce düşürülemez. Kısmen SUPERSEDED maddelerin ACTIVE REMAINDER kısmı aktiftir.

| Kayıt | SEC | Aktif kaynak ID’leri | Tam SUPERSEDED geçmiş / görev dışı | DEP aday kapsamı | Gerekli karar bağları |
|---|---|---|---|---|---|
| SCOPE-SEC-01 | SEC-01 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L025, F12-L026, F12-L028, F12-L030, F12-L032, F12-L033, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L131, F12-L133, F14-L005, F14-L006, F14-L007, F14-L008, F14-L009, F14-L010, F14-L042 | F12-L027, F12-L029, F12-L031, F12-L128 | DEP-008, DEP-011, DEP-015, DEP-016, DEP-021, DEP-026, DEP-027, DEP-028 | DEC-009 + DEC-022–027; F14-L008 aktif, istisna müşteri onayı bekliyor |
| SCOPE-SEC-02 | SEC-02 | F12-L004, F12-L006, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L012, F14-L013, F14-L014, F14-L042 | F12-L128 | DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-010 |
| SCOPE-SEC-03 | SEC-03 | F12-L004, F12-L007, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L022, F12-L028, F12-L035, F12-L036, F12-L037, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L037, F14-L042 | F12-L128 | DEP-008, DEP-014, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-020 |
| SCOPE-SEC-04 | SEC-04 | F12-L004, F12-L008, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L042 | F12-L128 | DEP-002, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-05 | SEC-05 | F12-L004, F12-L009, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L042 | F12-L128 | DEP-002, DEP-008, DEP-015, DEP-016, DEP-017, DEP-018, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-06 | SEC-06 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L042 | F12-L128 | DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-07 | SEC-07 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L042 | F12-L128 | DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-08 | SEC-08 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L039, F12-L040, F12-L041, F12-L042, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L040, F14-L042 | F12-L128 | DEP-015, DEP-016, DEP-017, DEP-026, DEP-027, DEP-028 | DEC-016 |
| SCOPE-SEC-09 | SEC-09 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-10 | SEC-10 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-11 | SEC-11 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-017, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-12 | SEC-12 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L049, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L115, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L038, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-017 |
| SCOPE-SEC-13 | SEC-13 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-14 | SEC-14 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-15 | SEC-15 | F12-L004, F12-L005, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L023, F12-L028, F12-L043, F12-L044, F12-L046, F12-L047, F12-L048, F12-L050, F12-L051, F12-L052, F12-L053, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-013, DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-16 | SEC-16 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L060, F12-L061, F12-L062, F12-L063, F12-L064, F12-L065, F12-L066, F12-L067, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L132, F12-L133, F14-L016, F14-L017, F14-L018, F14-L019, F14-L020, F14-L021, F14-L022, F14-L023, F14-L024, F14-L025, F14-L026, F14-L027, F14-L039, F14-L042 | F12-L068, F12-L128 | DEP-012, DEP-015, DEP-016, DEP-022, DEP-023, DEP-026, DEP-027, DEP-028 | DEC-011 |
| SCOPE-SEC-17 | SEC-17 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L060, F12-L061, F12-L062, F12-L063, F12-L064, F12-L065, F12-L066, F12-L067, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L132, F12-L133, F14-L016, F14-L017, F14-L018, F14-L019, F14-L020, F14-L021, F14-L022, F14-L023, F14-L024, F14-L025, F14-L026, F14-L027, F14-L039, F14-L042 | F12-L068, F12-L128 | DEP-012, DEP-015, DEP-016, DEP-022, DEP-023, DEP-026, DEP-027, DEP-028 | DEC-011 |
| SCOPE-SEC-18 | SEC-18 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L060, F12-L061, F12-L062, F12-L063, F12-L064, F12-L065, F12-L066, F12-L067, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L132, F12-L133, F14-L016, F14-L017, F14-L018, F14-L019, F14-L020, F14-L021, F14-L022, F14-L023, F14-L024, F14-L025, F14-L026, F14-L027, F14-L039, F14-L042 | F12-L068, F12-L128 | DEP-012, DEP-015, DEP-016, DEP-022, DEP-023, DEP-026, DEP-027, DEP-028 | DEC-011 |
| SCOPE-SEC-19 | SEC-19 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L060, F12-L061, F12-L062, F12-L063, F12-L064, F12-L065, F12-L066, F12-L067, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L132, F12-L133, F14-L016, F14-L017, F14-L018, F14-L019, F14-L020, F14-L021, F14-L022, F14-L023, F14-L024, F14-L025, F14-L026, F14-L027, F14-L039, F14-L042 | F12-L068, F12-L114, F12-L128 | DEP-012, DEP-015, DEP-016, DEP-018, DEP-022, DEP-023, DEP-026, DEP-027, DEP-028 | DEC-011 |
| SCOPE-SEC-20 | SEC-20 | F12-L004, F12-L010, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L070, F12-L071, F12-L072, F12-L073, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L028, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-015, DEP-016, DEP-020, DEP-026, DEP-027, DEP-028 | DEC-012 |
| SCOPE-SEC-21 | SEC-21 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L075, F12-L076, F12-L077, F12-L078, F12-L079, F12-L080, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-012, DEP-015, DEP-016, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-22 | SEC-22 | F12-L004, F12-L011, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L082, F12-L083, F12-L084, F12-L085, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F14-L039, F14-L042 | F12-L128 | DEP-008, DEP-012, DEP-015, DEP-016, DEP-017, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-23 | SEC-23 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L095, F12-L096, F12-L097, F12-L098, F12-L099, F12-L100, F12-L101, F12-L102, F12-L103, F12-L104, F12-L106, F12-L107, F12-L108, F12-L109, F12-L110, F12-L112, F12-L113, F12-L116, F12-L117, F12-L125, F12-L127, F12-L130, F12-L133, F12-L135, F14-L032, F14-L033, F14-L034, F14-L035, F14-L042, F14-L044, F14-L045, F14-L046, F14-L047, F14-L048, F14-L049 | F12-L124, F12-L128 | DEP-005, DEP-007, DEP-008, DEP-009, DEP-010, DEP-011, DEP-015, DEP-016, DEP-017, DEP-018, DEP-019, DEP-026, DEP-027, DEP-028 | DEC-014/015/019 |
| SCOPE-SEC-24 | SEC-24 | F12-L004, F12-L012, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L125, F12-L127, F12-L130, F12-L133, F14-L042, F14-L046, F14-L047, F14-L048, F14-L049 | F12-L124, F12-L128 | DEP-010, DEP-011, DEP-013, DEP-015, DEP-016, DEP-021, DEP-025, DEP-026, DEP-027, DEP-028 | DEC-019/021 |
| SCOPE-SEC-25 | SEC-25 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L104, F12-L112, F12-L116, F12-L117, F12-L119, F12-L120, F12-L121, F12-L122, F12-L127, F12-L130, F12-L133, F14-L042 | F12-L128 | DEP-012, DEP-013, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-020 |
| SCOPE-SEC-26 | SEC-26 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L087, F12-L088, F12-L089, F12-L090, F12-L091, F12-L092, F12-L093, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F12-L135, F14-L030, F14-L042 | F12-L128 | DEP-006, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-013 |
| SCOPE-SEC-27 | SEC-27 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L055, F12-L056, F12-L057, F12-L058, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F12-L134, F14-L042 | F12-L128 | DEP-011, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-021; bölüm tasarım onayı ayrıca eksik |
| SCOPE-SEC-28 | SEC-28 | F12-L004, F12-L014, F12-L015, F12-L016, F12-L017, F12-L018, F12-L019, F12-L020, F12-L021, F12-L028, F12-L043, F12-L044, F12-L095, F12-L096, F12-L097, F12-L098, F12-L099, F12-L100, F12-L101, F12-L102, F12-L103, F12-L104, F12-L112, F12-L116, F12-L117, F12-L127, F12-L130, F12-L133, F12-L135, F14-L033, F14-L042 | F12-L128 | DEP-012, DEP-015, DEP-016, DEP-026, DEP-027, DEP-028 | DEC-020 |

Scope ince ayarı: F12-L039/040/041/042 ve F14-L040 yalnız SEC-08 ses/tesir düzenini; F12-L113 SEC-23 podcast fotoğrafını; tam SUPERSEDED F12-L114 SEC-19 kaldırılan laptop panelini ilgilendirir. Eski envanterdeki GLOBAL images gibi geniş etiketlerden bu işleri ilgisiz bölümlere zorunlu tasarım işi diye yaymıyoruz. Özgün 152 satırın metni/ref’i değişmedi. Sayfa genelinde en az bir ses/müzik görseli gereksinimi, her bölüme ayrı müzik görseli ekleme şartı değildir.

## A–F sonuç matrisleri

Hücre anahtarı **SEC-xx.FAZ.KONTROL**, örnek SEC-01.DESIGN.B1 ve SEC-01.CODE.B1; birbirinden bağımsız. Her hücre yalnız PASS / FAIL / BLOCKED / NOT APPLICABLE / NOT TESTED alır. Kontrol tanımı ve faza özgü kriter DESIGN_HANDOFF’ta; PASS ve N/A kanıtları aşağıdaki günlükte. NOT APPLICABLE gerekçesiz kullanılamaz. İlk durumlar gerçek inceleme yapılmadığı için NOT TESTED; yedi bilinen tasarım blokajı BLOCKED. Hiçbir sonuç bu dosyanın kurulmasıyla PASS olmadı.

### A — CONTENT

| Birim | Faz | A1 | A2 | A3 | A4 | A5 |
|---|---|---|---|---|---|---|
| SEC-01 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-01 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | DESIGN | BLOCKED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

### B — READABILITY

| Birim | Faz | B1 | B2 | B3 | B4 | B5 |
|---|---|---|---|---|---|---|
| SEC-01 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-01 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

### C — DESIGN

| Birim | Faz | C1 | C2 | C3 | C4 |
|---|---|---|---|---|---|
| SEC-01 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-01 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | DESIGN | NOT TESTED | BLOCKED | NOT TESTED | NOT TESTED |
| SEC-03 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | DESIGN | NOT TESTED | NOT TESTED | BLOCKED | NOT TESTED |
| SEC-12 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | DESIGN | BLOCKED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | DESIGN | NOT TESTED | NOT TESTED | BLOCKED | NOT TESTED |
| SEC-23 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

### D — RESPONSIVE

| Birim | Faz | D1 | D2 | D3 | D4 |
|---|---|---|---|---|---|
| SEC-01 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-01 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

### E — INTERACTIONS

| Birim | Faz | E1 | E2 | E3 | E4 |
|---|---|---|---|---|---|
| SEC-01 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-01 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | DESIGN | NOT TESTED | NOT TESTED | BLOCKED | NOT TESTED |
| SEC-25 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | BLOCKED |
| SEC-28 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

### F — TECHNICAL

| Birim | Faz | F1 | F2 | F3 | F4 | F5 |
|---|---|---|---|---|---|---|
| SEC-01 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-01 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-02 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-03 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-04 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-05 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-06 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-07 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-08 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-09 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-10 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-11 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-12 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-13 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-14 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-15 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-16 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-17 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-18 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-19 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-20 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-21 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-22 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-23 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-24 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-25 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-26 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-27 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | DESIGN | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| SEC-28 | CODE | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

## Kontrol kanıtı / NOT APPLICABLE gerekçe günlüğü

Bu tablo sonucun ikinci kopyası değil, yetkili hücrenin kanıtıdır. PASS/N/A hücresi için karşılık yoksa gate geçmez; BLOCKED/FAIL için sebep/sonraki adım kaydedilir.

| Kayıt | Tam kontrol ID | Sonuçla bağ | DEP/DEC/RC | Kanıt veya N/A gerekçesi | Sahip / doğrulayan | Tarih / sürüm / onay |
|---|---|---|---|---|---|---|
| NOTE-SEC-03-C2 | SEC-03.DESIGN.C2 | BLOCKED | DEP-014 | Görsel değişimi / görselsiz yön kararı açık | Ekin + Work | Yeni kanıt yok; açık |
| NOTE-SEC-12-C3 | SEC-12.DESIGN.C3 | BLOCKED | DEP-008 | Hafta 3 temiz lisanslı görsel yok | Ekin | Yeni kanıt yok; açık |
| NOTE-SEC-20-C1 | SEC-20.DESIGN.C1 | BLOCKED | DEP-020 | Korunacak metronom/yerleşim kapsamı açık | Ekin + Work | Yeni kanıt yok; açık |
| NOTE-SEC-25-E3 | SEC-25.DESIGN.E3 | BLOCKED | DEP-013 | SSS açık bölüm/modal sunumu kararsız | Ekin + Work | Yeni kanıt yok; açık |
| NOTE-SEC-26-A1 | SEC-26.DESIGN.A1 | BLOCKED | DEP-006 | Gerçek dört yorum ve bağlam/izin kanıtı eksik | Ekin / Nilüfer | Yeni kanıt yok; açık |
| NOTE-SEC-28-E4 | SEC-28.DESIGN.E4 | BLOCKED | DEP-012 | Soru formu ve gerçek destek hedefi bilinmiyor | Ekin | Yeni kanıt yok; açık |
| NOTE-SEC-23-C3 | SEC-23.DESIGN.C3 | BLOCKED | DEP-007 | Gönderilecek Nilüfer fotoğrafı eksik | Ekin / Nilüfer | Yeni kanıt yok; açık |

Yeni gerçek kanıt kaydı zorunlu alanları: tam kontrol ID; kaynak/test/ekran veya ölçüm referansı; kontrol eden ve tarih; DESIGN/kod sürümü; N/A ise neden bu bölüm/fazda uygulanmadığı ve Ekin onayı. Sonuç hücresini değiştirirken eski kanıt veya geçersiz kılan RC bağını silme. Genel bir cümle veya yalnız kaynak dosyasının mevcut olması test kanıtı değildir.

## Yerel feedback çözüm günlüğü

Başlangıçta çözülmüş yerel feedback **0**. Anahtar: feedback ID + SEC + DESIGN/CODE. Her kayıt durumu OPEN / RESOLVED / EXCLUDED SUPERSEDED / OUT OF SCOPE WITH APPROVAL; aktif kısmi kayıt yalnız kalan kapsamıyla çözülür. RESOLVED için hangi kontrol(ler) ve kanıtla karşılandığı; OUT OF SCOPE için gerekçe, sahip, tarih ve Ekin onayı zorunlu. Kaydı olmayan aktif kapsam OPEN’dır. Global kayıt, bütün ilgili kapsamlar çözülmeden proje genelinde RESOLVED olamaz.

| Feedback ID | SEC | Faz | Geçerli kapsam / durum | Kontrol ID’leri | Çözüm/kanıt veya kapsam dışılık gerekçesi | Sahip | Tarih/sürüm/Ekin onayı |
|---|---|---|---|---|---|---|---|

Henüz gerçek çözüm yapılmadığından veri satırı eklenmedi; SCOPE ve GATE başlangıç açık sayıları yukarı/aşağıda maddi olarak kayıtlıdır.

## Global kontroller — her bölümde açık bağ

Aşağıdaki **her satır**, ilgili global kuralı yerel kontrol hücrelerine bağlar. Gerekli kontroller iki fazda da değerlendirilir; sonuç burada ikinci kez yazılmaz, A–F hücrelerinden okunur. Başlangıç tüm kurallar değerlendirmeye adaydır; uygulanmayan alan ancak yerel gerekçeli/onaylı NOT APPLICABLE ile çıkarılabilir. Böylece tipografi, okunurluk, kontrast, tarih/ürün, CTA, responsive, içerik erişimi, lisans, widget ve navigasyon/FAQ yalnız master’da kalan soyut başlıklar değildir.

| Kural | Adı | Yerel kontroller (DESIGN ve CODE) | Sahip / checkpoint | Yürürlükteki sürüm |
|---|---|---|---|---|
| G-01 | Typography | B1, B4 | Ekin + Work / Antigravity QA | G-01.v2 |
| G-02 | Readability / spacing | B1, B2 | Ekin + Work / Antigravity QA | G-02.v1 |
| G-03 | Text width | B3 | Ekin + Work / Antigravity QA | G-03.v1 |
| G-04 | Hierarchy | B4 | Ekin + Work / Antigravity QA | G-04.v1 |
| G-05 | Contrast | B5 | Ekin + Work / Antigravity QA | G-05.v1 |
| G-06 | Photo overlays | B5, C3 | Ekin + Work / Antigravity QA | G-06.v1 |
| G-07 | Responsive | D1, D2, D3 | Ekin + Work / Antigravity QA | G-07.v1 |
| G-08 | Content accessibility / scroll | D4, F3 | Ekin + Work / Antigravity QA | G-08.v1 |
| G-09 | CTA consistency | E1 | Ekin + Work / Antigravity QA | G-09.v1 |
| G-10 | Navigation and FAQ | E2, E3 | Ekin + Work / Antigravity QA | G-10.v1 |
| G-11 | Widget overlap | E4 | Ekin + Work / Antigravity QA | G-11.v1 |
| G-12 | Image licensing | C3 | Ekin + Work / Antigravity QA | G-12.v1 |
| G-13 | Copy integrity | A1, A2, A3, A5 | Ekin + Work / Antigravity QA | G-13.v1 |
| G-14 | SEO/sharing | F5 | Ekin + Work / Antigravity QA | G-14.v1 |
| G-15 | Legal/checkout/product claims | A4, E1, E4 | Ekin + Work / Antigravity QA | G-15.v1 |
| G-16 | Dates and product facts | A4 | Ekin + Work / Antigravity QA | G-16.v1 |

| Kayıt | SEC | Hedef / doğrulanan baseline | G-01 | G-02 | G-03 | G-04 | G-05 | G-06 | G-07 | G-08 | G-09 | G-10 | G-11 | G-12 | G-13 | G-14 | G-15 | G-16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GLOBAL-SEC-01 | SEC-01 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-02 | SEC-02 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-03 | SEC-03 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-04 | SEC-04 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-05 | SEC-05 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-06 | SEC-06 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-07 | SEC-07 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-08 | SEC-08 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-09 | SEC-09 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-10 | SEC-10 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-11 | SEC-11 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-12 | SEC-12 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-13 | SEC-13 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-14 | SEC-14 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-15 | SEC-15 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-16 | SEC-16 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-17 | SEC-17 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-18 | SEC-18 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-19 | SEC-19 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-20 | SEC-20 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-21 | SEC-21 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-22 | SEC-22 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-23 | SEC-23 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-24 | SEC-24 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-25 | SEC-25 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-26 | SEC-26 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-27 | SEC-27 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |
| GLOBAL-SEC-28 | SEC-28 | GB-0001 / NONE | B1+B4 | B1+B2 | B3 | B4 | B5 | B5+C3 | D1+D2+D3 | D4+F3 | E1 | E2+E3 | E4 | C3 | A1+A2+A3+A5 | F5 | A4+E1+E4 | A4 |

Global uygunluk kanıtı: SEC + G kimliği + yerel kontrol(ler) + kontrol edilen kural sürümü + tarih/kanıt. Bölüm VERIFIED iken doğrulanan sürüm eksik veya eskiyse gate geçmez. Ortak header/FAQ/head gibi bir bileşenin testi birçok SEC tarafından açıkça paylaşılabilir; hangi SEC/viewport/kontrolü kapsadığı belirtilmeden otomatik PASS aktarılmaz.

## Karar, bağımlılık ve onay kayıtları

Gerekli DEC kaydı: SEC/faz, DEC ID, kapsam, onaylayan/tarih/sürüm, açık mı onaylı mı. Gerekli DEP kaydı: SEC/faz, DEP ID, REQUIRED/NON-BLOCKING/DEFERRED NON-BLOCKING sınıfı, gerçek etkisi, kapanış kanıtı veya gerekçesi, sahip/checkpoint ve Ekin onayı. Scope tablosundaki aday bağımlılığın etkisi değerlendirilmeden açık sorun yok sayılmaz. Erteleme gerçek tamamlanmayı etkiliyorsa reddedilir.

| SEC | Faz | DEP/DEC | Sınıf/durum | Tamamlanmaya etkisi / erteleme gerekçesi | Sahip | Kanıt/checkpoint | Ekin onayı/tarih |
|---|---|---|---|---|---|---|---|

Başlangıçta geçerli erteleme **0**, verilmiş tasarım ve uygulama onayı **0**.

| SEC | Milestone | Tasarım/kod sürümü ve kapsam | Ekin’in açık onayı | Tarih | Kanıt / test planı sonuçları |
|---|---|---|---|---|---|

## Closure gate — kararın yazıldığı yer

Her bölümde GATE satırı zorunlu: D/C check başarısızlığı veya eksik kanıt, açık ilgili feedback, gerekli onaysız karar, gereken çözülmemiş DEP, gerçek uygulama/test eksikliği, açık/stale recheck ya da Ekin onayı eksikliği varsa **NOT VERIFIED**. Tasarım onayı ayrı aşamadır; tasarımın PASS hücresi kodun PASS hücresi yerine geçmez.

| Gate | SEC | Geçmemiş DESIGN/CODE kontrol sayısı | Açık yerel feedback D/C | Gerekli karar D/C | DEP değerlendirmesi | Ekin DESIGN onayı | Ekin CODE onayı | Gerçek CODE test | Açık RC / sürüm kanıtı | Sonuç |
|---|---|---|---|---|---|---|---|---|---|---|
| GATE-SEC-01 | SEC-01 | 27 / 27 | 32 / 32 | OPEN / OPEN | 8 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-02 | SEC-02 | 27 / 27 | 24 / 24 | OPEN / OPEN | 5 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-03 | SEC-03 | 27 / 27 | 26 / 26 | OPEN / OPEN | 7 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-04 | SEC-04 | 27 / 27 | 21 / 21 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-05 | SEC-05 | 27 / 27 | 21 / 21 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-06 | SEC-06 | 27 / 27 | 20 / 20 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-07 | SEC-07 | 27 / 27 | 20 / 20 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-08 | SEC-08 | 27 / 27 | 25 / 25 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-09 | SEC-09 | 27 / 27 | 30 / 30 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-10 | SEC-10 | 27 / 27 | 30 / 30 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-11 | SEC-11 | 27 / 27 | 30 / 30 | OPEN / OPEN | 10 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-12 | SEC-12 | 27 / 27 | 33 / 33 | OPEN / OPEN | 8 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-13 | SEC-13 | 27 / 27 | 30 / 30 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-14 | SEC-14 | 27 / 27 | 30 / 30 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-15 | SEC-15 | 27 / 27 | 30 / 30 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-16 | SEC-16 | 27 / 27 | 42 / 42 | OPEN / OPEN | 8 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-17 | SEC-17 | 27 / 27 | 42 / 42 | OPEN / OPEN | 8 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-18 | SEC-18 | 27 / 27 | 42 / 42 | OPEN / OPEN | 8 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-19 | SEC-19 | 27 / 27 | 42 / 42 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-20 | SEC-20 | 27 / 27 | 27 / 27 | OPEN / OPEN | 8 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-21 | SEC-21 | 27 / 27 | 27 / 27 | OPEN / OPEN | 7 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-22 | SEC-22 | 27 / 27 | 26 / 26 | OPEN / OPEN | 9 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-23 | SEC-23 | 27 / 27 | 47 / 47 | OPEN / OPEN | 14 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-24 | SEC-24 | 27 / 27 | 26 / 26 | OPEN / OPEN | 10 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-25 | SEC-25 | 27 / 27 | 24 / 24 | OPEN / OPEN | 7 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-26 | SEC-26 | 27 / 27 | 29 / 29 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-27 | SEC-27 | 27 / 27 | 25 / 25 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |
| GATE-SEC-28 | SEC-28 | 27 / 27 | 31 / 31 | OPEN / OPEN | 6 scoped; D/C etkisi UNVERIFIED | MISSING | MISSING | NO TEST | 0 / 0 | NOT VERIFIED |

Açık RC sayısı 0, fakat sürüm kanıtı da 0 olduğu için bu VERIFIED demek değildir. Sayımlar ve kanıt tabloları uyuşmuyorsa daha ihtiyatlı sonuç geçerlidir: **NOT VERIFIED**. Sadece GATE sonucunu elle değiştirerek kapanış verilemez. Kapanış denetiminde A–F, yerel feedback, DEC/DEP, global sürüm, gerçek test ve Ekin onayını birlikte yeniden hesapla.

## Global değişiklik / hedefli recheck kuyruğu

Şu anda **0 gerçek RC**: R0003 süreç kurulumu bir görsel/global ürün değişikliği değildir. GB-0001 mevcut kuralların ilk kayıtlı baseline’ı. Yeni GCH olayı olduğunda DECISIONS kaydı ve aşağıdaki RC satırları aynı güncellemede açılmadan yeni global sürüm doğrulanmış sayılamaz.

| RC ID | GCH / DEC | SEC | Faz / tam kontrol ID’leri | Eski→yeni kural sürümü | Önceki sonuç/kanıt | Yeni sonuç | Sahip | Kabul/yeniden test kanıtı | Ekin onayı / kapanış |
|---|---|---|---|---|---|---|---|---|---|

Etkilenen hücreyi NOT TESTED veya bilinen engelde BLOCKED yap; eskiden VERIFIED olan bölüm CODE RECHECK REQUIRED / gate NOT VERIFIED. Değişmeyen kontrol ve onaylar korunur. Recheck sonuçları ve yeni sürüm onayı tamamlanınca yalnız bu RC kapsamı kapatılır; etkilenmeyen bölümler yeniden açılmaz.

GB etiketi proje bağlamıdır; yalnız baseline numarası değişti diye bütün bölümler stale sayılmaz. Kapanışta her uygulanabilir G kuralının ilgili kapsamda yürürlükteki sürümü karşılaştırılır. Etki analizinde açıkça etkilenmeyen SEC için eski kural kanıtı geçerlidir; GCH etki dışı gerekçesiyle bağlanır. Yalnız etkilenen kural/kontrol kapsamı yeni sürüm ve recheck gerektirir. Bu ayrım ilgisiz bölümleri veya onayları otomatik yeniden açmayı engeller.
