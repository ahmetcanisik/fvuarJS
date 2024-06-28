if (!localStorage.getItem('preferences')) {
    localStorage.setItem('preferences', JSON.stringify({ lang: 'en-US', theme: 'system', colors: "static" }));
}
//export const themes = ["default", "error", "success", "info", "warning", "orange"];
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
        }
    ],
    version: "1.4.3",
    "en-US": {
        header: {
            title: "Documentation",
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
        title: "Version",
        copy_panel: {
            title: 'Testing copyToClipboard function',
            aria: 'Testing copy to clipboard function',
            inp_placeholder: 'Enter the text you want to copy...',
            btn_copy: 'copy'
        },
        new_alert: {
            title: 'Testing newAlert function',
            aria: 'Testing new alert function',
            theme_title: "Themes",
            position_title: "Positions"
        },
        update_notes: {
            title: "Update Notes",
            ver: "Version",
            testing: "testing",
            version: [
                {
                    test: true,
                    v: "1.4.3",
                    list: [
                        "minor bugs fixed"
                    ]
                },
                {
                    test: false,
                    v: "1.4",
                    list: [
                        "Target attribute was added to the copyToClipboard function, it contains both the id and the element itself. The opportunity to copy content is provided by specifying.",
                        "Fixed minor errors that occurred during copying.",
                        "An animation (shake) has been added to the existence of alerts.",
                        "Alerts colors and sizes have been rearranged to give them a more modernized look.",
                        "It is now possible to change the maximum time that the alert will remain on the screen (maxTime) and the maximum number of alerts that will appear on the screen (maxCount)."
                    ]
                }
            ]
        },
        langs: {
            "en-US": "English",
            "tr-TR": "Turkish"
        }
    },
    "tr-TR": {
        header: {
            title: "Dökümentasyon",
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
        title: "Versiyon",
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
            ver: "Versiyon",
            testing: "test ediliyor",
            version: [
                {
                    test: true,
                    v: "1.4.3",
                    list: [
                        "küçük hatalar düzeltildi"
                    ]
                },
                {
                    test: false,
                    v: "1.4",
                    list: [
                        "CopyToClipboard işlevine Target özelliği eklendi; hem kimliği hem de öğenin kendisini içerir. İçeriğin kopyalanma imkanı belirtilerek sağlanır.",
                        "Kopyalama sırasında oluşan küçük hatalar düzeltildi.",
                        "Uyarıların varlığına animasyon (sallama) eklendi.",
                        "Uyarıların renkleri ve boyutları, onlara daha modern bir görünüm kazandırmak için yeniden düzenlendi.",
                        "Artık uyarının ekranda kalacağı maksimum süreyi (maxTime) ve ekranda görünecek maksimum uyarı sayısını (maxCount) değiştirmek mümkün."
                    ]
                }
            ]
        },
        langs: {
            "en-US": "İngilizce",
            "tr-TR": "Türkçe"
        }
    }
}
export const preferences = JSON.parse(localStorage.getItem('preferences'));