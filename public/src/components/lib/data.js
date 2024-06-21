if (!localStorage.getItem('preferences')) {
    localStorage.setItem('preferences', JSON.stringify({ lang: 'en-US', theme: 'system', colors: "static" }));
}
export const types = ["default", "error", "success", "info", "warning", "orange"];
export const posX = ["top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right"];
export const themeButtons = [
    {
        type: "default",
        text: "Your Alert is here!",
        time: 4,
        position: "top-left"
    },
    {
        type: "error",
        text: "Your Alert is here!",
        time: 4,
        position: "bottom-left"
    },
    {
        type: "success",
        text: "Your Alert is here!",
        time: 4,
        position: "top-center"
    },
    {
        type: "info",
        text: "Your Alert is here!",
        time: 3,
        position: "bottom-center"
    },
    {
        type: "warning",
        text: "Your Alert is here!",
        time: 1,
        position: "top-right"
    },
    {
        type: "orange",
        text: "Your Alert is here!",
        time: 2,
        position: "bottom-right"
    }
]
export const content = {
    icon: {
        preferences: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" /></svg>`,
        theme: {
            title: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>`,
        },
    },
    langs: [
        {
            short_name: "en-US",
            long_name: "English",
            icon: "🇺🇸"
        },
        {
            short_name: "tr-TR",
            long_name: "Turkish",
            icon: "🇹🇷"
        },
        {
            short_name: "az-AZ",
            long_name: "Azerbaijani",
            icon: "🇦🇿"
        },
        {
            short_name: "ru-RU",
            long_name: "Russian",
            icon: "🇷🇺"
        }
    ],
    "en-US": {
        header: {
            title: "Testing... Version 1.4",
            preferences: "Preferences",
            select_language: {
                title: "Select Language",
                close: "Close",
                slogan: "modern alert library"
            },
            select_theme: {
                title: "Select Theme",
                themes: [
                    {
                        name: "system",
                        value: "System",
                        icon: "⚙️"
                    },
                    {
                        name: "light",
                        value: "Light",
                        icon: "☀️"
                    },
                    {
                        name: "dark",
                        value: "Dark",
                        icon: "🌙"
                    }
                ]
            }
        },
        title: "Testing... v1.4",
        copy_panel: {
            title: 'Testing copyToClipboard function',
            aria: 'Testing copy to clipboard function',
            inp_placeholder: 'Enter the text you want to copy...',
            btn_copy: 'copy to clipboard'
        },
        new_alert: {
            title: 'Testing newAlert function',
            aria: 'Testing new alert function',
            theme_title: "Themes",
            position_title: "Positions"
        },
        update_notes: {
            title: "Update Notes",
            version: {
                v1_4: {
                    title: "Version 1.4 (testing...)",
                    list: [
                        "Target attribute was added to the copyToClipboard function, it contains both the id and the element itself. The opportunity to copy content is provided by specifying.",
                        "Fixed minor errors that occurred during copying.",
                        "An animation (shake) has been added to the existence of alerts.",
                        "Alerts colors and sizes have been rearranged to give them a more modernized look.",
                        "It is now possible to change the maximum time that the alert will remain on the screen (maxTime) and the maximum number of alerts that will appear on the screen (maxCount)."
                    ]
                }
            }
            
        }
    },
    "tr-TR": {
        header: {
            title: "Test edilen versiyon: 1.4",
            preferences: "Tercihler",
            select_language: {
                title: "Dil Tercihi",
                close: "Kapat",
                slogan: "modern uyarı mesajları"
            },
            select_theme: {
                title: "Tema Tercihi",
                themes: [
                    {
                        name: "system",
                        value: "Sistem",
                        icon: "⚙️"
                    },
                    {
                        name: "light",
                        value: "Açık",
                        icon: "☀️"
                    },
                    {
                        name: "dark",
                        value: "Koyu",
                        icon: "🌙"
                    }
                ]
            }
        },
        title: "Test edilen sürüm 1.4",
        copy_panel: {
            title: 'copyToClipboard fonksiyon testi',
            aria: 'Panoya kopyala fonksiyonu testi',
            inp_placeholder: 'Kopyalamak istediğiniz metni girin...',
            btn_copy: 'kopyala'
        },
        new_alert: {
            title: 'newAlert fonksiyon testi',
            aria: 'yeni uyarı mesajı fonksiyonu testi',
            theme_title: "Temalar",
            position_title: "Pozisyonlar"
        },
        update_notes: {
            title: "Güncelleme Notları",
            version: {
                v1_4: {
                    title: "Versiyon 1.4 (test ediliyor...)",
                    list: [
                        "CopyToClipboard işlevine Target özelliği eklendi; hem kimliği hem de öğenin kendisini içerir. İçeriğin kopyalanma imkanı belirtilerek sağlanır.",
                        "Kopyalama sırasında oluşan küçük hatalar düzeltildi.",
                        "Uyarıların varlığına animasyon (sallama) eklendi.",
                        "Uyarıların renkleri ve boyutları, onlara daha modern bir görünüm kazandırmak için yeniden düzenlendi.",
                        "Artık uyarının ekranda kalacağı maksimum süreyi (maxTime) ve ekranda görünecek maksimum uyarı sayısını (maxCount) değiştirmek mümkün."
                    ]
                }
            }
            
        }
    },
    "az-AZ": {
        header: {
            title: "Test edilmiş versiya: 1.4",
            preferences: "Üstünlüklər",
            select_language: {
                title: "Dil üstünlükləri",
                close: "Dörddəbir",
                slogan: "müasir xəbərdarlıq mesajları"
            },
            select_theme: {
                title: "Mövzuya üstünlük",
                themes: [
                    {
                        name: "system",
                        value: "Sistem",
                        icon: "⚙️"
                    },
                    {
                        name: "light",
                        value: "Açıq",
                        icon: "☀️"
                    },
                    {
                        name: "dark",
                        value: "Qaranlıq",
                        icon: "🌙"
                    }
                ]
            }
        },
        title: "Test edilmiş versiya 1.4",
        copy_panel: {
            title: 'copyToClipboard funksiya testi',
            aria: 'Panoya kopyalayın funksiya testi',
            inp_placeholder: 'Kopyalamaq istədiyiniz mətni daxil edin...',
            btn_copy: 'surəti'
        },
        new_alert: {
            title: 'newAlert funksiya testi',
            aria: 'yeni xəbərdarlıq mesajı funksiya testi',
            theme_title: "Mövzular",
            position_title: "Vəzifələr"
        },
        update_notes: {
            title: "Qeydləri yeniləyin",
            version: {
                v1_4: {
                    title: "Versiya 1.4 (sınaq edilir...)",
                    list: [
                        "CopyToClipboard funksiyasına Hədəf xassəsi əlavə edildi; O, həm ID, həm də elementin özünü ehtiva edir. Məzmunu dəqiqləşdirməklə onun surətini çıxarmaq imkanı təmin edilir.",
                        "Kopyalama zamanı baş verən kiçik səhvlər düzəldildi.",
                        "Xəbərdarlıqların mövcudluğuna animasiya (silkələmə) əlavə edildi.",
                        "Xəbərdarlıqların rəngləri və ölçüləri onlara daha müasir görünüş vermək üçün yenidən təşkil edilib.",
                        "Artıq xəbərdarlığın ekranda qalacağı maksimum vaxtı (maxTime) və ekranda görünəcək xəbərdarlıqların maksimum sayını (maxCount) dəyişmək mümkündür."
                    ]
                }
            }
            
        }
    },
    "ru-RU": {
        header: {
            title: "Тестирование... Версия 1.4",
            preferences: "Предпочтения",
            select_language: {
                title: "Выберите язык",
                close: "Закрывать",
                slogan: "современная библиотека оповещений"
            },
            select_theme: {
                title: "Выберите тему",
                themes: [
                    {
                        name: "система",
                        value: "Cистема",
                        icon: "⚙️"
                    },
                    {
                        name: "свет",
                        value: "Cвет",
                        icon: "☀️"
                    },
                    {
                        name: "tемный",
                        value: "Темный",
                        icon: "🌙"
                    }
                ]
            }
        },
        title: "Тестирование... v1.4",
        copy_panel: {
            title: 'Тестирование функции copyToClipboard',
            aria: 'Тестирование функции копирования в буфер обмена',
            inp_placeholder: 'Введите текст, который хотите скопировать...',
            btn_copy: 'скопировать в буфер обмена'
        },
        new_alert: {
            title: 'Тестирование функции newAlert',
            aria: 'Тестирование новой функции оповещения',
            theme_title: "Темы",
            position_title: "Позиции"
        },
        update_notes: {
            title: "Обновить примечания",
            version: {
                v1_4: {
                    title: "Версия 1.4 (тестируется...)",
                    list: [
                        "В функцию copyToClipboard добавлен атрибут Target, он содержит как id, так и сам элемент. Возможность копирования контента предоставляется по указанию.",
                        "Исправлены мелкие ошибки, возникавшие при копировании.",
                        "К существованию оповещений добавлена ​​анимация (встряхивание).",
                        "Цвета и размеры оповещений были изменены, чтобы придать им более современный вид.",
                        "Теперь можно изменить максимальное время, в течение которого оповещение будет оставаться на экране (maxTime), и максимальное количество оповещений, отображаемых на экране (maxCount)."
                    ]
                }
            }
            
        }
    }
}
export const preferences = JSON.parse(localStorage.getItem('preferences'));