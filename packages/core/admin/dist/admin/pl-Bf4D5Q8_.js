'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const Analytics = "Analityka";
const Documentation = "Dokumentacja";
const Email = "E-mail";
const Password = "Hasło";
const Provider = "Dostawca";
const ResetPasswordToken = "Token odzyskiwania hasła";
const Role = "Rola";
const Username = "Nazwa użytkownika";
const Users = "Użytkownicy";
const anErrorOccurred = "Ups! Coś poszło nie tak. Spróbuj ponownie.";
const clearLabel = "Wyczyść";
const or = "LUB";
const skipToContent = "Przeskocz do zawartości";
const submit = "Wyślij";
const pl = {
	Analytics: Analytics,
	"Auth.components.Oops.text": "Twoje konto zostało zablokowane",
	"Auth.components.Oops.text.admin": "Jeśli to błąd, skontaktuj się z administratorem.",
	"Auth.components.Oops.title": "Ups...",
	"Auth.form.button.forgot-password": "Wyślij e-mail",
	"Auth.form.button.go-home": "PRZEJDŹ DO STRONY GŁÓWNEJ",
	"Auth.form.button.login": "Zaloguj się",
	"Auth.form.button.login.providers.error": "Nie możemy połączyć Cię za pośrednictwem wybranego dostawcy.",
	"Auth.form.button.login.strapi": "Zaloguj się przez Strapi",
	"Auth.form.button.password-recovery": "Odzyskiwanie hasła",
	"Auth.form.button.register": "Zaczynajmy",
	"Auth.form.confirmPassword.label": "Potwierdź hasło",
	"Auth.form.currentPassword.label": "Obecne hasło",
	"Auth.form.email.label": "E-mail",
	"Auth.form.email.placeholder": "np. jan.kowalski@test.com",
	"Auth.form.error.blocked": "Twoje konto zostało zablokowane przez administratora.",
	"Auth.form.error.code.provide": "Podano nieprawidłowy kod.",
	"Auth.form.error.confirmed": "Adres e-mail Twojego konta nie został potwierdzony.",
	"Auth.form.error.email.invalid": "Ten e-mail jest nieprawidłowy.",
	"Auth.form.error.email.provide": "Podaj swoją nazwę użytkownika lub adres e-mail.",
	"Auth.form.error.email.taken": "Adres e-mail jest już zajęty.",
	"Auth.form.error.invalid": "Identyfikator lub hasło jest nieprawidłowe.",
	"Auth.form.error.params.provide": "Podano nieprawidłowe parametry.",
	"Auth.form.error.password.format": "Twoje hasło nie może zawierać symbolu `$` więcej niż trzy razy.",
	"Auth.form.error.password.local": "Ten użytkownik nigdy nie ustawił hasła lokalnego, zaloguj się za pośrednictwem dostawcy użytego podczas tworzenia konta.",
	"Auth.form.error.password.matching": "Hasła różnią się od siebie.",
	"Auth.form.error.password.provide": "Proszę podać swoje hasło.",
	"Auth.form.error.ratelimit": "Zbyt wiele prób, spróbuj ponownie za minutę.",
	"Auth.form.error.user.not-exist": "Ten adres e-mail nie istnieje.",
	"Auth.form.error.username.taken": "Nazwa użytkownika jest już zajęta.",
	"Auth.form.firstname.label": "Imię",
	"Auth.form.firstname.placeholder": "Jan",
	"Auth.form.forgot-password.email.label": "Wpisz swój e-mail",
	"Auth.form.forgot-password.email.label.success": "E-mail pomyślnie wysłany do",
	"Auth.form.lastname.label": "Nazwisko",
	"Auth.form.lastname.placeholder": "Kowalski",
	"Auth.form.password.hide-password": "Ukryj hasło",
	"Auth.form.password.hint": "Minimum 8 znaków, 1 z dużej litery, 1 z małej litery i 1 cyfra",
	"Auth.form.password.show-password": "Pokaż hasło",
	"Auth.form.register.news.label": "Informuj mnie na bieżąco o nowych funkcjach i nadchodzących ulepszeniach (robiąc to, akceptujesz postanowienia zawarte w niniejszych dokumentach - {terms} i {policy}).",
	"Auth.form.register.subtitle": "Dane logowania uzywane są tylko do uwierzytelniania w Strapi. Wszystkie zapisane dane będą przechowywane w twojej bazie danych.",
	"Auth.form.rememberMe.label": "Zapamiętaj mnie",
	"Auth.form.username.label": "Nazwa użytkownika",
	"Auth.form.username.placeholder": "Jan Kowalski",
	"Auth.form.welcome.subtitle": "Zaloguj się do swojego konta",
	"Auth.form.welcome.title": "Witaj w Strapi!",
	"Auth.link.forgot-password": "Zapomniałeś hasła?",
	"Auth.link.ready": "Chcesz się zalogować?",
	"Auth.link.signin": "Zaloguj",
	"Auth.link.signin.account": "Posiadasz już konto?",
	"Auth.login.sso.divider": "Lub zaloguj się za pomocą",
	"Auth.login.sso.loading": "Ładowanie dostawców...",
	"Auth.login.sso.subtitle": "Zaloguj się do twojego konta za pomocą SSO",
	"Auth.privacy-policy-agreement.policy": "polityka prywatności",
	"Auth.privacy-policy-agreement.terms": "warunki",
	"Auth.reset-password.title": "Zresetuj hasło",
	"Content Manager": "Menedżer treści",
	"Content Type Builder": "Kreator typów treści",
	Documentation: Documentation,
	Email: Email,
	"Files Upload": "Przesyłanie plików",
	"HomePage.head.title": "Strona główna",
	"HomePage.roadmap": "Zobacz naszą roadmapę",
	"HomePage.welcome.congrats": "Gratulacje!",
	"HomePage.welcome.congrats.content": "Jesteś zalogowany jako pierwszy administrator. Aby odkryć potężne funkcje oferowane przez Strapi,",
	"HomePage.welcome.congrats.content.bold": "zachęcamy do utworzenia pierwszego typu kolekcji.",
	"Media Library": "Biblioteka mediów",
	"New entry": "Nowy wpis",
	Password: Password,
	Provider: Provider,
	ResetPasswordToken: ResetPasswordToken,
	Role: Role,
	"Roles & Permissions": "Role i Uprawnienia",
	"Roles.ListPage.notification.delete-all-not-allowed": "Niektórych ról nie można usunąć, ponieważ są powiązane z użytkownikami",
	"Roles.ListPage.notification.delete-not-allowed": "Nie można usunąć roli, jeśli jest powiązana z użytkownikami",
	"Roles.RoleRow.select-all": "Wybierz {name} do grupowych czynności",
	"Roles.RoleRow.user-count": "{number, plural, =0 {#  } one {# } other {# }}",
	"Roles.components.List.empty.withSearch": "Brak roli odpowiadającej wyszukiwaniu ({search}) ...",
	"Settings.PageTitle": "Ustawienia - {name}",
	"Settings.apiTokens.addFirstToken": "Dodaj pierwszy API Token",
	"Settings.apiTokens.addNewToken": "Dodaj nowy API Token",
	"Settings.tokens.copy.editMessage": "Dla bezpieczeństwa, możesz tylko raz zobaczyć swój token.",
	"Settings.tokens.copy.editTitle": "Ten token nie jest już dostępny.",
	"Settings.tokens.copy.lastWarning": "Pamiętaj żeby skopiować token, nie będziesz w stanie kolejny raz go zobaczyć!",
	"Settings.apiTokens.create": "Stwórz nowy API Token",
	"Settings.apiTokens.description": "Lista wygenerowanych tokenów pozwalających korzystać z API",
	"Settings.apiTokens.emptyStateLayout": "Brak zawartości...",
	"Settings.tokens.notification.copied": "Token skopiowany do schowka",
	"Settings.apiTokens.title": "API Tokeny",
	"Settings.tokens.types.full-access": "Full access",
	"Settings.tokens.types.read-only": "Read-only",
	"Settings.application.description": "Globalne informacje dotyczące panelu administratora",
	"Settings.application.edition-title": "obecny plan",
	"Settings.application.get-help": "Uzyskaj pomoc",
	"Settings.application.link-pricing": "Zobacz cennik",
	"Settings.application.link-upgrade": "Aktualizuj panel admina",
	"Settings.application.node-version": "wersja node",
	"Settings.application.strapi-version": "wersja strapi",
	"Settings.application.strapiVersion": "wersja strapi",
	"Settings.application.title": "Ogólne",
	"Settings.error": "Błąd",
	"Settings.global": "Ustawienia Globalne",
	"Settings.permissions": "Panel administracyjny",
	"Settings.permissions.category": "Ustawienia uprawnień dla {category}",
	"Settings.permissions.category.plugins": "Ustawienia uprawnień dla pluginu {category} ",
	"Settings.permissions.conditions.anytime": "W dowolnym momencie",
	"Settings.permissions.conditions.apply": "Zastosuj",
	"Settings.permissions.conditions.can": "Może",
	"Settings.permissions.conditions.conditions": "Definiować warunki",
	"Settings.permissions.conditions.links": "Linki",
	"Settings.permissions.conditions.no-actions": "Najpierw musisz wybrać akcje (tworzenie, odczytywanie, aktualizowanie, ...) przed zdefiniowaniem dla nich warunków.",
	"Settings.permissions.conditions.none-selected": "W dowolnym momencie",
	"Settings.permissions.conditions.or": "LUB",
	"Settings.permissions.conditions.when": "Kiedy",
	"Settings.permissions.select-all-by-permission": "Wybierz wszystkie {label} uprawnienia",
	"Settings.permissions.select-by-permission": "Wybierz {label} uprawnienie",
	"Settings.permissions.users.create": "Utwórz nowego użytkownika",
	"Settings.permissions.users.email": "E-mail",
	"Settings.permissions.users.firstname": "Imię",
	"Settings.permissions.users.lastname": "Nazwisko",
	"Settings.permissions.users.form.sso": "Połącz z logowaniem jednokrotnym (SSO)",
	"Settings.permissions.users.form.sso.description": "Po włączeniu (ON) użytkownicy mogą logować się za pomocą logowania jednokrotnego (SSO)",
	"Settings.permissions.users.listview.header.subtitle": "Wszyscy użytkownicy posiadający dostęp do panelu admina",
	"Settings.permissions.users.tabs.label": "Uprawnienia",
	"Settings.profile.form.notify.data.loaded": "Dane twojego profilu zostały załadowane",
	"Settings.profile.form.section.experience.clear.select": "Usuń wybór języka interfejsu",
	"Settings.profile.form.section.experience.here": "tutaj",
	"Settings.profile.form.section.experience.interfaceLanguage": "Język aplikacji",
	"Settings.profile.form.section.experience.interfaceLanguage.hint": "Wyświetla aplikację w wybranym języku.",
	"Settings.profile.form.section.experience.interfaceLanguageHelp": "Zmiany preferencji będą miały zastosowanie tylko do tego profilu. Więcej informacji {tutaj}.",
	"Settings.profile.form.section.experience.mode.label": "Motyw aplikacji",
	"Settings.profile.form.section.experience.mode.hint": "Wyświetla aplikację w wybranym motywie.",
	"Settings.profile.form.section.experience.mode.option-label": "{name} mode",
	"Settings.profile.form.section.experience.title": "Korzystanie",
	"Settings.profile.form.section.head.title": "Profil użytkownika",
	"Settings.profile.form.section.profile.page.title": "Strona profilu",
	"Settings.roles.create.description": "Zdefiniuj uprawnienia nadane roli",
	"Settings.roles.create.title": "Utwórz rolę",
	"Settings.roles.created": "Utworzono rolę",
	"Settings.roles.edit.title": "Edytuj rolę",
	"Settings.roles.form.button.users-with-role": "Użytkownicy z tą rolą",
	"Settings.roles.form.created": "Utworzono",
	"Settings.roles.form.description": "Nazwa i opis roli",
	"Settings.roles.form.permission.property-label": "Uprawnienia dla {label}",
	"Settings.roles.form.permissions.attributesPermissions": "Uprawnienia do pól",
	"Settings.roles.form.permissions.create": "Tworzenie",
	"Settings.roles.form.permissions.delete": "Usuwanie",
	"Settings.roles.form.permissions.publish": "Publikowanie",
	"Settings.roles.form.permissions.read": "Odczyt",
	"Settings.roles.form.permissions.update": "Aktualizowanie",
	"Settings.roles.list.button.add": "Dodaj nową rolę",
	"Settings.roles.list.description": "Lista ról",
	"Settings.roles.title.singular": "rola",
	"Settings.sso.description": "Skonfiguruj ustawienia funkcji logowania jednokrotnego (SSO).",
	"Settings.sso.form.defaultRole.description": "Połączy to nowego uwierzytelnionego użytkownika do wybranej roli",
	"Settings.sso.form.defaultRole.description-not-allowed": "Musisz mieć uprawnienia do odczytu ról administratora",
	"Settings.sso.form.defaultRole.label": "Domyślna rola",
	"Settings.sso.form.registration.description": "Utwórz nowego użytkownika przy logowaniu SSO, jeśli konto nie istnieje",
	"Settings.sso.form.registration.label": "Automatyczna rejestracja",
	"Settings.sso.title": "Jednokrotne logowanie (SSO)",
	"Settings.webhooks.create": "Utwórz webhook",
	"Settings.webhooks.create.header": "Utwórz nowy nagłówek",
	"Settings.webhooks.created": "Utworzono webhook",
	"Settings.webhooks.event.publish-tooltip": "To zdarzenie istnieje tylko dla treści z włączonym systemem wersji roboczej/publikacji",
	"Settings.webhooks.events.create": "Utwórz",
	"Settings.webhooks.events.update": "Edytuj",
	"Settings.webhooks.form.events": "Zdarzenia",
	"Settings.webhooks.form.headers": "Nagłówki",
	"Settings.webhooks.form.url": "URL",
	"Settings.webhooks.headers.remove": "Usuń rząd {number}",
	"Settings.webhooks.key": "Klucz",
	"Settings.webhooks.list.button.add": "Dodaj nowy webhook",
	"Settings.webhooks.list.description": "Otrzymaj powiadomienia o zmianach POST.",
	"Settings.webhooks.list.empty.description": "Nie ma jeszcze żadnych webhooków",
	"Settings.webhooks.list.empty.link": "Zobacz naszą dokumentację",
	"Settings.webhooks.list.empty.title": "Nie ma jeszcze żadnych webhooków",
	"Settings.webhooks.list.th.actions": "akcje",
	"Settings.webhooks.list.th.status": "stan",
	"Settings.webhooks.singular": "webhook",
	"Settings.webhooks.title": "Webhooki",
	"Settings.webhooks.to.delete": "{webhooksToDeleteLength, plural, one {# } other {# }} wybrano",
	"Settings.webhooks.trigger": "Uruchom",
	"Settings.webhooks.trigger.cancel": "Anuluj wyzwalacz",
	"Settings.webhooks.trigger.pending": "W oczekiwaniu...",
	"Settings.webhooks.trigger.save": "Zapisz, aby uruchomić",
	"Settings.webhooks.trigger.success": "Powodzenie!",
	"Settings.webhooks.trigger.success.label": "Uruchomiono poprawnie",
	"Settings.webhooks.trigger.test": "Testowy-wyzwalacz",
	"Settings.webhooks.trigger.title": "Zapisz przed wyzwoleniem",
	"Settings.webhooks.value": "Wartość",
	"Usecase.back-end": "Back-end developer",
	"Usecase.button.skip": "Pomiń to pytanie",
	"Usecase.content-creator": "Content Creator",
	"Usecase.front-end": "Front-end developer",
	"Usecase.full-stack": "Full-stack developer",
	"Usecase.input.work-type": "Jaki rodzaj pracy wykonujesz?",
	"Usecase.notification.success.project-created": "Projekt został utworzony",
	"Usecase.other": "Inny",
	"Usecase.title": "Opowiedz nam trochę o sobie",
	Username: Username,
	Users: Users,
	"Users & Permissions": "Użytkownicy i Uprawnienia",
	"Users.components.List.empty": "Brak użytkowników...",
	"Users.components.List.empty.withFilters": "Brak użytkowników z zastosowanymi filtrami...",
	"Users.components.List.empty.withSearch": "Brak użytkowników odpowiadających wyszukiwaniu ({search})...",
	"admin.pages.MarketPlacePage.head": "Sklep - Pluginy",
	"admin.pages.MarketPlacePage.offline.title": "Jesteś offline",
	"admin.pages.MarketPlacePage.offline.subtitle": "Musisz być połączony z internetem żeby skorzystać ze sklepu Strapi.",
	"admin.pages.MarketPlacePage.plugin.copy": "Skopiuj instalację",
	"admin.pages.MarketPlacePage.plugin.copy.success": "Polecenie instalacji gotowe do użycia w twoim terminalu",
	"admin.pages.MarketPlacePage.plugin.info": "Dowiedz się więcej",
	"admin.pages.MarketPlacePage.plugin.info.label": "Dowiedz się więcej o {pluginName}",
	"admin.pages.MarketPlacePage.plugin.info.text": "Informacje",
	"admin.pages.MarketPlacePage.plugin.installed": "Zainstalowano",
	"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi": "Stworzony przez Strapi",
	"admin.pages.MarketPlacePage.plugin.tooltip.verified": "Zweryfikowany przez Strapi",
	"admin.pages.MarketPlacePage.search.clear": "Wyczyść wyszukiwarkę",
	"admin.pages.MarketPlacePage.search.empty": "Brak wyników dla \"{target}\"",
	"admin.pages.MarketPlacePage.search.placeholder": "Szukaj pluginu",
	"admin.pages.MarketPlacePage.submit.plugin.link": "Wyślij swój plugin",
	"admin.pages.MarketPlacePage.subtitle": "Wykorzystaj Strapi lepiej",
	"admin.pages.MarketPlacePage.missingPlugin.title": "Brakuje pluginu?",
	"admin.pages.MarketPlacePage.missingPlugin.description": "Powiedz nam jakiego pluginu szukasz, a my damy znać o tym naszym developerom w razie gdyby szukali inspiracji!",
	anErrorOccurred: anErrorOccurred,
	"app.component.CopyToClipboard.label": "Skopiuj do schowka",
	"app.component.search.label": "Szukaj {target}",
	"app.component.table.duplicate": "Duplikuj {target}",
	"app.component.table.edit": "Edytuj {target}",
	"app.component.table.select.one-entry": "Wybierz {target}",
	"app.components.BlockLink.blog": "Blog",
	"app.components.BlockLink.blog.content": "Czytaj najnowsze wiadomości na temat Strapi.",
	"app.components.BlockLink.code": "Przykłady",
	"app.components.BlockLink.code.content": "Ucz się poprzez testowanie prawdziwych projektów tworzonych przez naszą społeczność.",
	"app.components.BlockLink.documentation.content": "Odkryj kluczowe pojęcia, wskazówki i instrukcje.",
	"app.components.BlockLink.tutorial": "Tutoriale",
	"app.components.BlockLink.tutorial.content": "Podążaj za instrukcjami krok po kroku żeby użyć i dostosować Strapi.",
	"app.components.Button.cancel": "Anuluj",
	"app.components.Button.confirm": "Potwierdź",
	"app.components.Button.reset": "Resetuj",
	"app.components.ComingSoonPage.comingSoon": "Wkrótce",
	"app.components.ConfirmDialog.title": "Potwierdzenie",
	"app.components.DownloadInfo.download": "Pobieranie w toku...",
	"app.components.DownloadInfo.text": "Może to chwilę potrwać. Dziękujemy za cierpliwość.",
	"app.components.EmptyAttributes.title": "Nie ma jeszcze żadnych pól",
	"app.components.EmptyStateLayout.content-document": "Brak zawartości",
	"app.components.EmptyStateLayout.content-permissions": "Nie masz dostępu do tej zawartości",
	"app.components.GuidedTour.CM.create.content": "<p>Twórz i zarządzaj zawartością tutaj w Menedżerze Treści.</p><p>Przykład: Weźmy pod uwagę przykład z blogiem, możesz napisać aktykuł, zapisać i opublikować go kiedy tylko chcesz.</p><p>💡 Szybka wskazówka - Nie zapomnij kliknąć opublikuj, w treści którą tworzysz.</p>",
	"app.components.GuidedTour.CM.create.title": "⚡️ Stwórz treść",
	"app.components.GuidedTour.CM.success.content": "<p>Super, został ostatni krok!</p><b>🚀 Zobacz materiały w praktyce</b>",
	"app.components.GuidedTour.CM.success.cta.title": "Przetestuj API",
	"app.components.GuidedTour.CM.success.title": "Krok 2: Ukończony ✅",
	"app.components.GuidedTour.CTB.create.content": "<p>Kolekcje pomagają zarządzać wieloma pozycjami, a pojedyncze typy są odpowiednie do zarządzania tylko jednym wpisem.</p> <p>Przykład: Wyobraź sobie stronę z blogiem. Tam artykuły byłyby kolekcjami, a strona główna byłaby pojedynczym typem.</p>",
	"app.components.GuidedTour.CTB.create.cta.title": "Stwórz kolekcję",
	"app.components.GuidedTour.CTB.create.title": "🧠 Stwórz swoją pierwszą kolekcję",
	"app.components.GuidedTour.CTB.success.content": "<p>Niezła robota!</p><b>⚡️ Czym chciałbyś się podzielić ze światem?</b>",
	"app.components.GuidedTour.CTB.success.title": "Krok 1: Ukończony ✅",
	"app.components.GuidedTour.apiTokens.create.content": "<p>Wygeneruj token aby otrzymać dostęp do treści, którą stworzyłeś.</p>",
	"app.components.GuidedTour.apiTokens.create.cta.title": "Wygeneruj API Token",
	"app.components.GuidedTour.apiTokens.create.title": "🚀 Zobacz materiały w praktyce",
	"app.components.GuidedTour.apiTokens.success.content": "<p>Przetestuj treść wykonując żądanie HTTP:</p><ul><li><p>Pod URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>Przy użyciu nagłówka: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>Zerknij na <documentationLink>dokumentację</documentationLink> by poznać więcej sposobów na interakcję z treścią.</p>",
	"app.components.GuidedTour.apiTokens.success.cta.title": "Powrót na stronę główną",
	"app.components.GuidedTour.apiTokens.success.title": "Krok 3: Ukończony ✅",
	"app.components.GuidedTour.create-content": "Stwórz zawartość",
	"app.components.GuidedTour.home.CM.title": "⚡️ Czym chciałbyś się podzielić ze światem?",
	"app.components.GuidedTour.home.CTB.cta.title": "Przejdź do kreatora typów treści",
	"app.components.GuidedTour.home.CTB.title": "🧠 Stwórz strukturę treści",
	"app.components.GuidedTour.home.apiTokens.cta.title": "Przetestuj API",
	"app.components.GuidedTour.skip": "Pomiń",
	"app.components.GuidedTour.title": "3 kroki żeby zacząć",
	"app.components.HomePage.button.blog": "Zobacz więcej na blogu",
	"app.components.HomePage.community": "Dołącz do społeczności",
	"app.components.HomePage.community.content": "Porozmawiaj z członkami zespołu, współtwórcami i programistami na różnych kanałach.",
	"app.components.HomePage.create": "Utwórz swój pierwszy typ zawartości",
	"app.components.HomePage.roadmap": "Zobacz naszą roadmapę",
	"app.components.HomePage.welcome": "Witaj na pokładzie 👋!",
	"app.components.HomePage.welcome.again": "Witaj 👋",
	"app.components.HomePage.welcomeBlock.content": "Cieszymy się, że jesteś częścią społeczności. Nieustannie poszukujemy opinii, więc zachęcamy do wysyłania nam wiadomości",
	"app.components.HomePage.welcomeBlock.content.again": "Mamy nadzieję, że robisz postępy w swoim projekcie! Zachęcamy do zapoznania się z najnowszymi wiadomościami o Strapi. Dokładamy wszelkich starań, aby ulepszyć produkt w oparciu o Wasze opinie.",
	"app.components.HomePage.welcomeBlock.content.issues": "problemy.",
	"app.components.HomePage.welcomeBlock.content.raise": " lub wskazać ",
	"app.components.ImgPreview.hint": "Przeciągnij i upuść plik w tym obszarze lub {browse}, aby przesłać plik",
	"app.components.ImgPreview.hint.browse": "przeglądaj",
	"app.components.InputFile.newFile": "Dodaj nowy plik",
	"app.components.InputFileDetails.open": "Otwórz w nowej karcie",
	"app.components.InputFileDetails.originalName": "Oryginalna nazwa:",
	"app.components.InputFileDetails.remove": "Usuń ten plik",
	"app.components.InputFileDetails.size": "Rozmiar:",
	"app.components.InstallPluginPage.Download.description": "Pobranie i zainstalowanie pluginu może zająć kilka sekund.",
	"app.components.InstallPluginPage.Download.title": "Pobieranie...",
	"app.components.InstallPluginPage.description": "Rozszerz swoją aplikację bez wysiłku.",
	"app.components.LeftMenu.collapse": "Zwiń nawigację",
	"app.components.LeftMenu.expand": "Rozszerz nawigację",
	"app.components.LeftMenu.logout": "Wyloguj",
	"app.components.LeftMenu.navbrand.title": "Strapi Dashboard",
	"app.components.LeftMenu.navbrand.workplace": "Workplace",
	"app.components.LeftMenuFooter.help": "Wsparcie",
	"app.components.LeftMenuFooter.poweredBy": "Obsługiwane przez ",
	"app.components.LeftMenuLinkContainer.collectionTypes": "Typy kolekcji",
	"app.components.LeftMenuLinkContainer.configuration": "Ustawienia",
	"app.components.LeftMenuLinkContainer.general": "Ogólne",
	"app.components.LeftMenuLinkContainer.noPluginsInstalled": "Nie zainstalowano jeszcze żadnych pluginów",
	"app.components.LeftMenuLinkContainer.plugins": "Pluginy",
	"app.components.LeftMenuLinkContainer.singleTypes": "Pojedyncze typy",
	"app.components.ListPluginsPage.deletePlugin.description": "Odinstalowanie pluginu może zająć kilka sekund.",
	"app.components.ListPluginsPage.deletePlugin.title": "Odinstalowywanie",
	"app.components.ListPluginsPage.description": "Lista zainstalowanych pluginów.",
	"app.components.ListPluginsPage.head.title": "Lista pluginów",
	"app.components.Logout.logout": "Wyloguj",
	"app.components.Logout.profile": "Profil",
	"app.components.MarketplaceBanner": "Odkryj pluginy tworzone przez społeczność oraz wiele więcej rzeczy żeby odpalić projekt, używając Strapi.",
	"app.components.MarketplaceBanner.image.alt": "strapi logo",
	"app.components.MarketplaceBanner.link": "Sprawdź",
	"app.components.NotFoundPage.back": "Powrót na stronę główną",
	"app.components.NotFoundPage.description": "Nie znaleziono",
	"app.components.Official": "Oficjalne",
	"app.components.Onboarding.help.button": "Pomoc",
	"app.components.Onboarding.label.completed": "% ukończono",
	"app.components.Onboarding.title": "Odpal filmy szkoleniowe",
	"app.components.PluginCard.Button.label.download": "Pobierz",
	"app.components.PluginCard.Button.label.install": "Już zainstalowane",
	"app.components.PluginCard.PopUpWarning.install.impossible.autoReload.needed": "Funkcja autoReload musi być włączona. Uruchom aplikację za pomocą polecenia `yarn develop`.",
	"app.components.PluginCard.PopUpWarning.install.impossible.confirm": "Rozumiem!",
	"app.components.PluginCard.PopUpWarning.install.impossible.environment": "Ze względów bezpieczeństwa plugin można pobrać tylko w środowisku programistycznym.",
	"app.components.PluginCard.PopUpWarning.install.impossible.title": "Pobieranie jest niemożliwe",
	"app.components.PluginCard.compatible": "Zgodny z Twoją aplikacją",
	"app.components.PluginCard.compatibleCommunity": "Zgodny ze społecznością",
	"app.components.PluginCard.more-details": "Więcej szczegółów",
	"app.components.ToggleCheckbox.off-label": "Nie",
	"app.components.ToggleCheckbox.on-label": "Tak",
	"app.components.Users.MagicLink.connect": "Wyślij ten link do użytkownika, aby mógł się połączyć.",
	"app.components.Users.MagicLink.connect.sso": "Wyślij ten link do użytkownika, pierwsze logowanie można wykonać za pośrednictwem dostawcy SSO",
	"app.components.Users.ModalCreateBody.block-title.details": "Szczegóły",
	"app.components.Users.ModalCreateBody.block-title.roles": "Role użytkownika",
	"app.components.Users.ModalCreateBody.block-title.roles.description": "Twój użytkownik może mieć jedną lub kilka ról",
	"app.components.Users.SortPicker.button-label": "Sortuj według",
	"app.components.Users.SortPicker.sortby.email_asc": "E-mail (od A do Z)",
	"app.components.Users.SortPicker.sortby.email_desc": "E-mail (od Z do A)",
	"app.components.Users.SortPicker.sortby.firstname_asc": "Imię (od A do Z)",
	"app.components.Users.SortPicker.sortby.firstname_desc": "Imię (od Z do A)",
	"app.components.Users.SortPicker.sortby.lastname_asc": "Nazwisko (od A do Z)",
	"app.components.Users.SortPicker.sortby.lastname_desc": "Nazwisko (od Z do A)",
	"app.components.Users.SortPicker.sortby.username_asc": "Nazwa użytkownika (od A do Z)",
	"app.components.Users.SortPicker.sortby.username_desc": "Nazwa użytkownika (od Z do A)",
	"app.components.listPlugins.button": "Dodaj nowy plugin",
	"app.components.listPlugins.title.none": "Brak zainstalowanych pluginów",
	"app.components.listPluginsPage.deletePlugin.error": "Wystąpił błąd podczas odinstalowywania pluginu",
	"app.containers.App.notification.error.init": "Wystąpił błąd podczas żądania interfejsu API",
	"app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin": "Jeśli nie otrzymasz tego łącza, skontaktuj się z administratorem.",
	"app.containers.AuthPage.ForgotPasswordSuccess.text.email": "Do otrzymania linku do odzyskiwania hasła może minąć kilka minut.",
	"app.containers.AuthPage.ForgotPasswordSuccess.title": "E-mail wysłany",
	"app.containers.Users.EditPage.form.active.label": "Aktywne",
	"app.containers.Users.EditPage.header.label": "Edytuj {name}",
	"app.containers.Users.EditPage.header.label-loading": "Edytuj użytkownika",
	"app.containers.Users.EditPage.roles-bloc-title": "Role przypisane",
	"app.containers.Users.ModalForm.footer.button-success": "Stwórz użytkownika",
	"app.links.configure-view": "Skonfiguruj widok",
	"app.page.not.found": "Ups! Nie możemy znaleźć strony, której szukasz...",
	"app.static.links.cheatsheet": "Ściąga",
	"app.utils.SelectOption.defaultMessage": " ",
	"app.utils.add-filter": "Dodaj filtr",
	"app.utils.close-label": "Zamknij",
	"app.utils.defaultMessage": " ",
	"app.utils.duplicate": "Duplikuj",
	"app.utils.edit": "Edytuj",
	"app.utils.errors.file-too-big.message": "Plik jest za duży",
	"app.utils.filter-value": "Filtr",
	"app.utils.filters": "Filtry",
	"app.utils.notify.data-loaded": "{target} został załadowany",
	"app.utils.placeholder.defaultMessage": " ",
	"app.utils.publish": "Opublikuj",
	"app.utils.select-all": "Zaznacz wszystko",
	"app.utils.select-field": "Zaznacz pole",
	"app.utils.select-filter": "Zaznacz filtr",
	"app.utils.unpublish": "Cofnij publikację",
	clearLabel: clearLabel,
	"coming.soon": "Ta zawartość jest aktualnie w trakcie budowy i wróci za jakiś czas!",
	"component.Input.error.validation.integer": "Wartość ta musi być liczbą całkowitą",
	"components.AutoReloadBlocker.description": "Uruchom Strapi za pomocą jednego z następujących poleceń:",
	"components.AutoReloadBlocker.header": "Ten plugin wymaga funkcji przeładowania.",
	"components.ErrorBoundary.title": "Coś poszło nie tak...",
	"components.FilterOptions.FILTER_TYPES.$contains": "zawiera",
	"components.FilterOptions.FILTER_TYPES.$containsi": "zawiera (wielkość liter nie ma znaczenia)",
	"components.FilterOptions.FILTER_TYPES.$endsWith": "kończy się",
	"components.FilterOptions.FILTER_TYPES.$endsWithi": "kończy się (wielkość liter nie ma znaczenia)",
	"components.FilterOptions.FILTER_TYPES.$eq": "kończy się na",
	"components.FilterOptions.FILTER_TYPES.$eqi": "kończy się na (wielkość liter nie ma znaczenia)",
	"components.FilterOptions.FILTER_TYPES.$gt": "jest większa niż",
	"components.FilterOptions.FILTER_TYPES.$gte": "jest większe lub równe",
	"components.FilterOptions.FILTER_TYPES.$lt": "jest mniejsze niż",
	"components.FilterOptions.FILTER_TYPES.$lte": "jest mniejsze lub równe",
	"components.FilterOptions.FILTER_TYPES.$ne": "nie jest",
	"components.FilterOptions.FILTER_TYPES.$nei": "nie jest (wielkość liter nie ma znaczenia)",
	"components.FilterOptions.FILTER_TYPES.$notContains": "nie zawiera",
	"components.FilterOptions.FILTER_TYPES.$notContainsi": "nie zawiera (wielkość liter nie ma znaczenia)",
	"components.FilterOptions.FILTER_TYPES.$notNull": "nie jest null",
	"components.FilterOptions.FILTER_TYPES.$null": "jest null",
	"components.FilterOptions.FILTER_TYPES.$startsWith": "zaczyna się na",
	"components.FilterOptions.FILTER_TYPES.$startsWithi": "zaczyna się na (wielkość liter nie ma znaczenia)",
	"components.Input.error.attribute.key.taken": "Ta wartość już istnieje",
	"components.Input.error.attribute.sameKeyAndName": "Nie mogą być równe",
	"components.Input.error.attribute.taken": "Ta nazwa pola już istnieje",
	"components.Input.error.contain.lowercase": "Hasło musi zawierać co najmniej jedną małą literę",
	"components.Input.error.contain.number": "Hasło musi zawierać co najmniej jedną cyfrę",
	"components.Input.error.contain.uppercase": "Hasło musi zawierać co najmniej jedną wielką literę",
	"components.Input.error.contentTypeName.taken": "Ta nazwa już istnieje",
	"components.Input.error.custom-error": "{errorMessage} ",
	"components.Input.error.password.noMatch": "Hasła nie pasują do siebie",
	"components.Input.error.validation.email": "To nie jest e-mail",
	"components.Input.error.validation.json": "To nie pasuje do formatu JSON",
	"components.Input.error.validation.lowercase": "Wartość musi być zapisana małymi literami",
	"components.Input.error.validation.max": "Wartość jest za wysoka {max}.",
	"components.Input.error.validation.maxLength": "Wartość jest za długa {max}.",
	"components.Input.error.validation.min": "Wartość jest za mała {min}.",
	"components.Input.error.validation.minLength": "Wartość jest za krótka {min}.",
	"components.Input.error.validation.minSupMax": "Wartość nie może być większa",
	"components.Input.error.validation.regex": "Wartość nie jest zgodna z wyrażeniem regularnym.",
	"components.Input.error.validation.required": "To pole jest wymagane.",
	"components.Input.error.validation.unique": "Ta wartość jest już używana.",
	"components.InputSelect.option.placeholder": "Wybierz tutaj",
	"components.ListRow.empty": "Brak danych do wyświetlenia.",
	"components.NotAllowedInput.text": "Brak uprawnień do wyświetlania tego pola",
	"components.OverlayBlocker.description": "Używasz funkcji, która wymaga ponownego uruchomienia serwera. Poczekaj, aż serwer się uruchomi.",
	"components.OverlayBlocker.description.serverError": "Serwer powinien się już zrestartować, sprawdź swoje logi w terminalu.",
	"components.OverlayBlocker.title": "Czekam na ponowne uruchomienie...",
	"components.OverlayBlocker.title.serverError": "Ponowne uruchomienie trwa dłużej niż oczekiwano",
	"components.PageFooter.select": "wpisów na stronie",
	"components.ProductionBlocker.description": "Ze względów bezpieczeństwa musimy wyłączyć ten plugin w innych środowiskach.",
	"components.ProductionBlocker.header": "Ten plugin jest dostępna tylko w trybie deweloperskim.",
	"components.Search.placeholder": "Szukaj...",
	"components.TableHeader.sort": "Sortuj {label}",
	"components.Wysiwyg.ToggleMode.markdown-mode": "Tryb Markdown",
	"components.Wysiwyg.ToggleMode.preview-mode": "Tryb podglądu",
	"components.Wysiwyg.collapse": "Zwiń",
	"components.Wysiwyg.selectOptions.H1": "Tytuł H1",
	"components.Wysiwyg.selectOptions.H2": "Tytuł H2",
	"components.Wysiwyg.selectOptions.H3": "Tytuł H3",
	"components.Wysiwyg.selectOptions.H4": "Tytuł H4",
	"components.Wysiwyg.selectOptions.H5": "Tytuł H5",
	"components.Wysiwyg.selectOptions.H6": "Tytuł H6",
	"components.Wysiwyg.selectOptions.title": "Dodaj tytuł",
	"components.WysiwygBottomControls.charactersIndicators": "znaków",
	"components.WysiwygBottomControls.fullscreen": "Rozszerz",
	"components.WysiwygBottomControls.uploadFiles": "Przeciągnij i upuść pliki, wklej ze schowka lub {browse}.",
	"components.WysiwygBottomControls.uploadFiles.browse": "wybierz je",
	"components.pagination.go-to": "Idź do {page}",
	"components.pagination.go-to-next": "Idź do następnej strony",
	"components.pagination.go-to-previous": "Idź do poprzedniej strony",
	"components.pagination.remaining-links": "Dodaj {number} inne linki",
	"components.popUpWarning.button.cancel": "Nie, anuluj",
	"components.popUpWarning.button.confirm": "Tak, potwierdź",
	"components.popUpWarning.message": "Czy na pewno chcesz to usunąć?",
	"components.popUpWarning.title": "Proszę potwierdzić",
	"form.button.continue": "Dalej",
	"form.button.done": "Gotowe",
	"global.actions": "Akcje",
	"global.back": "Powrót",
	"global.change-password": "Zmień hasło",
	"global.content-manager": "Menedżer treści",
	"global.continue": "Dalej",
	"global.delete": "Usuń",
	"global.delete-target": "Usuń {target}",
	"global.description": "Opis",
	"global.details": "Szczegóły",
	"global.disabled": "Wyłączony",
	"global.documentation": "Dokumentacja",
	"global.enabled": "Włączony",
	"global.finish": "Zapisz",
	"global.marketplace": "Sklep",
	"global.name": "Nazwa",
	"global.none": "None",
	"global.password": "Hasło",
	"global.plugins": "Pluginy",
	"global.profile": "Profil",
	"global.prompt.unsaved": "Czy na pewno chcesz opuścić tę stronę? Wszystkie twoje modyfikacje zostaną utracone",
	"global.reset-password": "Zresetuj hasło",
	"global.roles": "Role",
	"global.save": "Zapisz",
	"global.see-more": "Zobacz więcej",
	"global.select": "Wybierz",
	"global.select-all-entries": "Wybierz wszystkie wpisy",
	"global.settings": "Ustawienia",
	"global.type": "Typ",
	"global.users": "Użytkownicy",
	"notification.contentType.relations.conflict": "Typ treści ma sprzeczne relacje",
	"notification.default.title": "Informacja:",
	"notification.error": "Wystąpił bład",
	"notification.error.layout": "Nie udało się pobrać układu",
	"notification.form.error.fields": "Ten formularz zawiera błędy",
	"notification.form.success.fields": "Zapisano zmiany",
	"notification.link-copied": "Link został skopiowany do schowka",
	"notification.permission.not-allowed-read": "Nie masz uprawnień, by zobaczyć ten dokument",
	"notification.success.delete": "Pozycja została usunięta",
	"notification.success.saved": "Zapisano",
	"notification.success.title": "Udało się:",
	"notification.version.update.message": "Dostępna jest nowa wersja Strapi!",
	"notification.warning.title": "Ostrzeżenie:",
	or: or,
	"request.error.model.unknown": "Ten model nie istnieje",
	skipToContent: skipToContent,
	submit: submit
};

exports.Analytics = Analytics;
exports.Documentation = Documentation;
exports.Email = Email;
exports.Password = Password;
exports.Provider = Provider;
exports.ResetPasswordToken = ResetPasswordToken;
exports.Role = Role;
exports.Username = Username;
exports.Users = Users;
exports.anErrorOccurred = anErrorOccurred;
exports.clearLabel = clearLabel;
exports.default = pl;
exports.or = or;
exports.skipToContent = skipToContent;
exports.submit = submit;
//# sourceMappingURL=pl-Bf4D5Q8_.js.map