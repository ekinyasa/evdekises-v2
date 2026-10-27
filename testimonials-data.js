/**
 * EVDEKİ SES — KATILIMCI DENEYİMLERİ (TESTIMONIALS DATA STORE)
 * ═══════════════════════════════════════════════════════════════
 * Authoritative Central Data Structure for Social Proof & Testimonials.
 * Connects directly to evdekises-legal-operations (L09 / P-C Decision Matrix).
 *
 * STATUS: DRAFT — Yalnızca tasarım, geliştirme ve yerel önizleme amaçlıdır.
 * Yayın izinleri kesinleşene kadar onaylanmış nihai beyan sayılmaz.
 *
 * HUKUKİ KURAL:
 * - Yorumlar Evdeki Ses programının doğrudan sonuçları olarak sunulmaz;
 *   Nilüfer Ormanlı'nın önceki bireysel çalışmalarına ve eğitimlerine aittir.
 * - İsimler ve alıntılar merkezi olarak bu dosyadan kolayca anonimleştirilebilir.
 * - Görseller gerçek kişilerin fotoğrafı değildir; editoryal ve temsili görseldir.
 * ═══════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  const TESTIMONIALS_DATA = [
    {
      id: "testimonial-01",
      name: "Aslınur",
      displayName: "Aslınur",
      isAnonymous: false,
      roleContext: "Bireysel çalışma katılımcısı",
      source: "Nilüfer Ormanlı önceki bireysel çalışma geri bildirimi",
      quote: "Sesin bedene ilmek ilmek örülü olduğunu… gösterdi. Her görüşme sonrası bedenimin bir parçası çiçeğe duruyor ve sesim çiçeğin etrafında arı gibi vızıldamaya başlıyordu.",
      image: {
        type: "editorial_photo",
        src: "assets/testimonials/aslinur.webp",
        originalSource: "assets/testimonial-images/testimonial-01-writing.jpg",
        alt: "İçsel çalışma ve not alma anı temsili editoryal fotoğrafı",
        badge: "Temsili Görsel"
      },
      permissionStatus: "DRAFT_PENDING_CONFIRMATION", // evdekises-legal-operations L09 / P-C
      reviewStatus: "DRAFT_APPROVED_FOR_LAYOUT",
      isPendingTranscription: false,
      legalNote: "Evdeki Ses program sonucu değildir; Nilüfer Ormanlı’nın önceki bireysel çalışmasına aittir."
    },
    {
      id: "testimonial-02",
      name: "Özge",
      displayName: "Özge",
      isAnonymous: false,
      roleContext: "Ses eğitimi katılımcısı",
      source: "Nilüfer Ormanlı önceki eğitim geri bildirimi",
      quote: "Ses eğitimi diye başladığım eğitim sırasında önce bedende yarattığım sıkışıklıkları fark ettim, ve günlük hayatımda bu daralmaları başka nerelerde yaşadığıma bir ayna görevi yapmaya başladı… Yine gündelik hayatımda, işimde netlikler kazanmaya başladım.",
      image: {
        type: "editorial_photo",
        src: "assets/testimonials/ozge.webp",
        originalSource: "assets/testimonial-images/testimonial-07-outdoor-portrait.jpg",
        alt: "Açık havada derin ve sakin bir nefes anı temsili editoryal fotoğrafı",
        badge: "Temsili Görsel"
      },
      permissionStatus: "DRAFT_PENDING_CONFIRMATION",
      reviewStatus: "DRAFT_APPROVED_FOR_LAYOUT",
      isPendingTranscription: false,
      legalNote: "Evdeki Ses program sonucu değildir; Nilüfer Ormanlı’nın önceki eğitimine aittir."
    },
    {
      id: "testimonial-03",
      name: "Ceren",
      displayName: "Ceren",
      isAnonymous: false,
      roleContext: "Atölye ve pratik katılımcısı",
      source: "Nilüfer Ormanlı önceki atölye geri bildirimi",
      quote: "Çocuksu oyunbazlığım ortaya çıktığında buna hem aynı şekilde karşılık verebilecek çocuksu bir ruh, hem de alanı ve olanı tutabilecek olgun bir ruha ihtiyaç duyarım; işte Nilüfer ikisini de taşıyan bir can.",
      image: {
        type: "editorial_photo",
        src: "assets/testimonials/ceren.webp",
        originalSource: "assets/testimonial-images/testimonial-03-joy.jpg",
        alt: "Çocuksu oyunbazlık ve doğada neşe temsili editoryal fotoğrafı",
        badge: "Temsili Görsel"
      },
      permissionStatus: "DRAFT_PENDING_CONFIRMATION",
      reviewStatus: "DRAFT_APPROVED_FOR_LAYOUT",
      isPendingTranscription: false,
      legalNote: "Evdeki Ses program sonucu değildir; Nilüfer Ormanlı’nın önceki atölyesine aittir."
    },
    {
      id: "testimonial-04",
      name: "Esma",
      displayName: "Esma",
      isAnonymous: false,
      roleContext: "Ders çalışması katılımcısı",
      source: "Nilüfer Ormanlı önceki ders geri bildirimi",
      quote: "Her yaptığımız ders, elimde kendime ait bir hediyeyle bitti.",
      image: {
        type: "editorial_photo",
        src: "assets/testimonials/esma.webp",
        originalSource: "assets/testimonial-images/testimonial-05-natural-portrait.jpg",
        alt: "Ev ortamında sakin ve kendine ait bir alan temsili editoryal fotoğrafı",
        badge: "Temsili Görsel"
      },
      permissionStatus: "DRAFT_PENDING_CONFIRMATION",
      reviewStatus: "DRAFT_APPROVED_FOR_LAYOUT",
      isPendingTranscription: false,
      legalNote: "Evdeki Ses program sonucu değildir; Nilüfer Ormanlı’nın önceki dersine aittir."
    },
    {
      id: "testimonial-05",
      name: "Mükerrem",
      displayName: "Mükerrem",
      isAnonymous: false,
      roleContext: "Bireysel çalışma katılımcısı",
      source: "Nilüfer Ormanlı önceki çalışma geri bildirimi",
      quote: "Daha ilk gün bile kapınızdan çıkarken hafiflediğimi hissetmiştim. Bana kendimi sevmeyi, bedenimi sevmeyi hatırlattığınız […] için minnettarım.",
      image: {
        type: "editorial_photo",
        src: "assets/testimonials/mukerrem.webp",
        originalSource: "assets/testimonial-images/testimonial-02-portrait.jpg",
        alt: "Güneş ışığında dingin ve bedenle barışık bir an temsili editoryal fotoğrafı",
        badge: "Temsili Görsel"
      },
      permissionStatus: "DRAFT_PENDING_CONFIRMATION",
      reviewStatus: "EDITORIAL_TRUNCATION_PENDING_FINAL_REVIEW", // Uzun özgün yorumdan editoryal kısaltma; nihai kontrol bekliyor
      isPendingTranscription: false,
      legalNote: "Uzun özgün yorumdan hazırlanmış editoryal kısaltmadır; nihai alıntı kontrolü bekliyor. Evdeki Ses sonucu değildir."
    },
    {
      id: "testimonial-06",
      name: "Merve G.",
      displayName: "Merve G.",
      isAnonymous: false,
      roleContext: "Bireysel çalışma katılımcısı",
      source: "Nilüfer Ormanlı arşivindeki özgün el yazısı mektup",
      quote: "Dokuz aylık bir süreci birlikte geçirdiğim, bilgisine, tecrübesine güvendiğim, nefes terapisi, ses terapisi, farklı meditasyon teknikleri, nefesoloji ve adını bilmediğim farklı tekniklerle uzun ve çok da kolay olmayan zamanlarda bana şifa olan, çok şey öğrendiğim rehberliğine güvendiğim Nilüfer Ormanlı’nın sizlere de şifa olmasını umarım ve canıgönülden tavsiye ederim.",
      image: {
        type: "editorial_photo",
        src: "assets/testimonials/merve-g.webp",
        originalSource: "assets/testimonial-images/testimonial-10-candid-moment-original.png",
        alt: "Samimi ve içten bir iletişim anı temsili editoryal fotoğrafı",
        badge: "Temsili Görsel"
      },
      permissionStatus: "DRAFT_PENDING_CONFIRMATION",
      reviewStatus: "DRAFT_TRANSCRIPTION_APPLIED",
      isPendingTranscription: false,
      legalNote: "Merve G.’nin özgün el yazısı mektubundan transkribe edilmiştir; nihai izin kontrolü bekliyor. Evdeki Ses programı sonucu değildir."
    }
  ];

  // Expose to global scope for inspectability and external automation
  window.EVDEKI_SES_TESTIMONIALS_DATA = TESTIMONIALS_DATA;

  /**
   * Helper to retrieve items (supports future filtering by permission status)
   */
  window.getEvdekiSesTestimonials = function (options) {
    const opts = Object.assign({ onlyApproved: false, anonymizeAll: false }, options);
    return TESTIMONIALS_DATA.filter(function (item) {
      if (opts.onlyApproved && item.permissionStatus !== 'APPROVED') {
        return false;
      }
      return true;
    }).map(function (item) {
      if (opts.anonymizeAll) {
        return Object.assign({}, item, { displayName: item.displayName.charAt(0) + '., Katılımcı' });
      }
      return item;
    });
  };

})();
