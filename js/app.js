// ==============================================
// 1. MECHANIZM SANITYZACJI (CRITICAL CORE)
// ==============================================
const sanitizePath = (str) => String(str).trim().toLowerCase().replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/\s+/g, '');

const FEEDBACK_MESSAGES = {
    bad: [
        "Geograficzna odklejka! XD Twoja orientacja w terenie jest jak zasięg w PKP – niby jest, ale nic nie działa. Musisz jeszcze powtórzyć materiał.",
        "Ale bambik! Nie znasz mapy? Przecież to podstawowy skill. Zerknij do notatek, inaczej będzie przypał.",
        "Geo-katastrofa! Twoja wiedza to jak statek bez kompasu – płyniesz, ale nie wiesz gdzie. Czas na szybki kurs nawigacji!",
        "Mapa? Serio? Nawet twoje tło pulpitu wie więcej o geografii niż ty. Lepiej zacznij od podstaw, zanim zgubisz się w drodze do szkoły!",
        "Gdzie Rzym, a gdzie Krym? Twoje odpowiedzi to jak próba znalezienia naszego LO na mapie Grenlandii. Potrzebujesz pilnej lekcji orientacji (bez telefonu!)",
        "Geo-porażka! Twój wynik to jak próba zbudowania igloo na Saharze – niemożliwe bez podstawowej wiedzy. Powtórka obowiązkowa!"
    ],
    mid: [
        "W miarę ok, ale... To taki typowy wynik Seby z Limanki, który ściągał. Niby coś napisał, ale Ty nie podzielaj jego drogi. Pracuj dalej!",
        "Rel, mogło być gorzej. Masz tyle wiedzy, co nieprzygotowań w półroczu – niby coś jest, ale szybko się kończy. Doczytaj parę tematów.",
        "Średnio na jeża! Twój wynik to jak średnia ocena średniaka w średnim liceum. Nie myśl o tym za dużo, tylko wracaj po dawkę wiedzy do podręcznika.",
        "Pół na pół, bez szału. Twoja wiedza geograficzna to jak rzut monetą – czasem trafisz, czasem nie. Masz trochę pracy przed sobą, ale dasz radę.",
        "Lepiej niż wczoraj, gorzej niż jutro. Widzę potencjał, ale musisz jeszcze trochę poćwiczyć. Może quiz powtórkowy?",
        "Geo-średniak! Twój wynik to jak tęcza po deszczu – kolorowo, ale nie zawsze idealnie. Małe poprawki i będzie perfekcyjnie!"
    ],
    good: [
        "Koks wynik, szacun! Masz skilla, o którym inni mogą tylko pomarzyć na sprawdzianie. Jeszcze chwila i będziesz legendą.",
        "Potężny progres! Widać, że nie skipowałeś lekcji i znasz mapę lepiej niż drogę do Żabki. Mały szlif i będzie 100%!",
        "Twoja wiedza to jak zdobycie Mount Everestu – imponujące i godne podziwu. Tak trzymaj! Ale Ty wolisz zdobyć Księżyc, prawda?",
        "Level up! Przeskoczyłeś poziom trudności jak w grze – gratulacje, jesteś prawdziwym ekspertem!",
        "Geo-czarodziej! Twoje odpowiedzi to jak zaklęcia z Harry’ego Pottera – precyzyjne i skuteczne. Czas na kolejny poziom!",
        "Pro geography! Twój wynik to jak lot w kosmos – osiągnąłeś niemożliwe. Jesteś prawdziwym odkrywcą!"
    ],
    perfect: [
        "Gratulacje! Jesteś totalnym GigaChadem geografii. Ukończyłeś moduł perfekcyjnie. Możesz iść po zasłużonego Wojanka XD",
        "Totalna dominacja! Rozwaliłeś ten quiz jak ostatniego bossa w grze. Ukończyłeś moduł bez żadnego błędu. Jestem dumny!",
        "Geo-legenda! Możesz raz zapomnieć przynieść podręcznik do łaciny w nagrodę. Jesteś mistrzem!",
        "Perfect score, master of geography! Twoja wiedza imponuje nawet twórcy tej aplikacji. Ale nie schlebiaj mu (za bardzo).",
        "Oh s**t! Lubisz walić 'setki'? Może się nie przyzwyczajaj, co? XD",
        "Ju ar dżeografi master! To po angielsku, wiesz?"
    ]
};

// ==============================================
// 2. APPLICATION LOGIC
// ==============================================
const app = {
    // Wstrzyknięcie widoków z views.js
    ...appViews,

    state: {
        view: 'HOME', // HOME, LEVEL, UNITS, TOPICS, LOADING, LESSON_SELECT, UNIT_MODE_SELECT, GAME_VIEW, GAME_RESULT, ERROR
        classId: null, levelId: null, unitId: null, topicId: null, unitTitle: '', topicTitle: '',
        currentData: null, lastAttemptedUrl: '',
        
        // GAME ENGINE STATE
        gameView: null, 
        currentExerciseIndex: 0,
        score: 0,
        
        // Flashcards (Smart Learn)
        activeFlashcards: [],
        isFlipped: false,
        
        // Quiz (Shuffle)
        quizQuestions: [],
        quizAnswered: false,
        selectedQuizOption: null,
        
        // True/False
        tfAnswered: false,
        
        // Matching Game (Hardcore)
        matchingCards: [],
        matchingSelected: null,
        matchingSolved: [],
        matchingError: [],
        lives: 3,
        
        gameResult: null
    },

    init() {
        this.renderHome();
    },

    // --- NAVIGATION ---

    renderHome() {
        this.state = { 
            view: 'HOME', classId: null, levelId: null, unitId: null, topicId: null, 
            unitTitle: '', topicTitle: '', currentData: null, lastAttemptedUrl: '',
            currentExerciseIndex: 0, score: 0
        };
        this.updateUI();
    },

    goHome() { this.renderHome(); },

    goBack() {
        const s = this.state;
        if (s.view === 'GAME_VIEW' || s.view === 'GAME_RESULT') {
            if (s.topicId === 'UNIT_REVIEW') {
                this.state.view = 'UNIT_MODE_SELECT';
            } else {
                this.state.view = 'LESSON_SELECT';
            }
            this.updateUI();
        } else if (s.view === 'LESSON_SELECT' || s.view === 'LOADING' || s.view === 'ERROR' || s.view === 'REMOVED' || s.view === 'UNIT_MODE_SELECT') {
            this.goToTopics(s.unitId, s.unitTitle);
        } else if (s.view === 'TOPICS') {
            this.goToUnits();
        } else if (s.view === 'UNITS') {
            this.goHome();
        } else if (s.view === 'LEVEL') {
            this.goHome();
        }
    },

    goToLevel(classId) {
        this.state.classId = classId;
        this.currentLevel = 2;
        this.state.currentLevel = 2; // 2 = Rozszerzony (zgodnie z nowym flow)
        this.state.levelId = 'r';
        this.goToLevelMenu(classId);
    },

    goToLevelMenu(levelId) {
        this.goToUnits('r');
    },

    goToUnits(levelId = null) {
        if (levelId) this.state.levelId = levelId;
        this.state.view = 'UNITS';
        this.updateUI();
    },

    goToTopics(unitId, unitTitle) {
        // GUARD CLAUSE: Obsługa Działu III (Wizualnego) bez testów
        if (this.state.classId == 3 && this.state.levelId === 'r' && (unitId === 'III' || unitId === 'dz3')) {
            const appContainer = document.getElementById('app-root');
            appContainer.innerHTML = `
                <div class="container mx-auto px-4 py-8">
                    <div class="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-slate-100 text-center animate-fade-in-up">
                        <div class="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6">
                            <i data-lucide="map" class="w-12 h-12 text-emerald-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-slate-800 mb-2">Analiza Krajobrazu</h2>
                        <p class="text-slate-600 my-6 leading-relaxed">
                            Ten dział opiera się na pracy z mapą i materiałami wizualnymi. 
                            Ze względu na specyfikę, nie jest on realizowany w formie testów w aplikacji.
                        </p>
                        <button onclick="app.goToUnits()" class="inline-flex items-center justify-center bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-all shadow-md hover:shadow-lg font-medium">
                            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
                            Powrót do działów
                        </button>
                    </div>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        this.state.unitId = unitId;
        this.state.unitTitle = unitTitle;
        this.state.view = 'TOPICS';
        this.updateUI();
    },

    // --- GAME LOGIC INITIALIZATION ---

    startGame(type, questionLimit = 0) {
        const data = this.state.currentData;
        this.state.lives = 3;
        
        // --- FLASHCARDS (Smart Learn) ---
        if (type === 'FLASHCARDS') {
            if (!data.lessonData?.flashcards?.length) { alert('Brak fiszek.'); return; }
            this.state.gameView = type;
            this.state.activeFlashcards = [...data.lessonData.flashcards];
            this.state.currentExerciseIndex = 0;
            this.state.isFlipped = false;
        }
        
        // --- QUIZ (Shuffle & Limit & Hybrid Logic) ---
        else if (type === 'QUIZ') {
            if (!data.testData?.quiz?.length) { alert('Brak pytań.'); return; }
            this.state.gameView = type;
            this.state.currentExerciseIndex = 0;
            this.state.score = 0;
            this.state.quizAnswered = false;
            this.state.selectedQuizOption = null;
            
            let rawQuestions = [...data.testData.quiz];
            
            this.shuffleArray(rawQuestions);

            if (questionLimit > 0 && rawQuestions.length > questionLimit) {
                rawQuestions = rawQuestions.slice(0, questionLimit);
            }

            // Map questions for display with safeguards
            this.state.quizQuestions = rawQuestions.map(q => {
                // [FIX 3.6.3] Start guard
                if (!q.options) return null;

                const opts = Array.isArray(q.options) 
                    ? Object.entries(q.options) 
                    : Object.entries(q.options || {});
                
                // [FIX 3.6.2] Clean labels before shuffle
                opts.forEach(opt => {
                    if (typeof opt[1] === 'string') {
                        opt[1] = opt[1].replace(/^[A-Z0-9][.)]\s*/i, '');
                    }
                });

                // Shuffle options
                for (let i = opts.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [opts[i], opts[j]] = [opts[j], opts[i]];
                }
                
                // HYBRID LOGIC FIX: Normalize correct key
                let correctKey = q.answer || q.ans;
                
                // If options are array BUT answer is a letter (e.g. "A"), convert to index (e.g. "0")
                if (Array.isArray(q.options) && typeof correctKey === 'string' && isNaN(correctKey)) {
                    correctKey = String(correctKey.toUpperCase().charCodeAt(0) - 65);
                }
                
                return { ...q, shuffledOptions: opts, correctKey };
            }).filter(q => q); // [FIX 3.6.3] Filter nulls
        }
        
        // --- MATCHING (Hardcore) - REFACTORED v3.6.5 ---
        else if (type === 'MATCHING') {
            const pairs = data.lessonData?.matchingPairs;
            if (!pairs || pairs.length === 0) { alert('Brak par.'); return; }
            
            let selectedPairs = [...pairs];
            if (selectedPairs.length > 8) {
                selectedPairs = selectedPairs.sort(() => 0.5 - Math.random()).slice(0, 8);
            }

            let uniqueIdCounter = 0; // [FIX 3.6.5] Unique ID Counter
            let cards = [];
            selectedPairs.forEach((pair, idx) => {
                const t1 = pair.pair1 || pair.left || pair.term;
                const t2 = pair.pair2 || pair.right || pair.definition;
                if(t1 && t2) {
                    cards.push({ id: uniqueIdCounter++, text: t1, type: 'left' });
                    cards.push({ id: uniqueIdCounter++, text: t2, type: 'right' });
                }
            });
            
            if(cards.length === 0) { alert('Błędne dane par.'); return; }

            this.shuffleArray(cards);

            this.state.gameView = type;
            this.state.matchingCards = cards;
            this.state.matchingSelected = null;
            this.state.matchingSolved = [];
            this.state.matchingError = [];
            this.state.lives = 3;
        }
        
        // --- TRUE/FALSE (Active Feedback) ---
        else if (type === 'TF') {
            if (!data.testData?.trueFalse?.length) { alert('Brak pytań P/F.'); return; }
            this.state.gameView = type;
            this.state.currentExerciseIndex = 0;
            this.state.score = 0;
            this.state.quizAnswered = false;
            this.state.selectedQuizOption = null;
        }

        this.state.view = 'GAME_VIEW';
        this.updateUI();
    },

    // --- GAME INTERACTIONS ---

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    // Flashcards
    flipCard() {
        this.state.isFlipped = !this.state.isFlipped;
        this.updateUI();
    },
    
    markFlashcardKnown() {
        this.state.activeFlashcards.splice(this.state.currentExerciseIndex, 1);
        
        if (this.state.activeFlashcards.length === 0) {
            this.finishGame("Fiszki", this.state.currentData.lessonData.flashcards.length);
            return;
        }

        if (this.state.currentExerciseIndex >= this.state.activeFlashcards.length) {
            this.state.currentExerciseIndex = 0;
        }
        
        this.state.isFlipped = false;
        this.updateUI();
    },

    navFlashcard(direction) {
        const total = this.state.activeFlashcards.length;
        let newIndex = this.state.currentExerciseIndex + direction;
        
        if (newIndex >= total) newIndex = 0;
        if (newIndex < 0) newIndex = total - 1;

        this.state.currentExerciseIndex = newIndex;
        this.state.isFlipped = false;
        this.updateUI();
    },

    // Quiz
    handleQuizAnswer(selectedKey) {
        if (this.state.quizAnswered) return;

        const q = this.state.quizQuestions[this.state.currentExerciseIndex];
        
        // [FIX 3.6.3] Fixed Logic for Answer Verification
        let isCorrect = false;
        
        // 1.1 Convert index string/number to Letter (if applicable)
        let userLetter = selectedKey;
        if (!isNaN(selectedKey)) {
            userLetter = String.fromCharCode(65 + parseInt(selectedKey));
        }

        // 1.2 Get raw correct answer (Source of Truth)
        const correctLetter = q.answer || q.ans;

        // 1.3 Strict Comparison
        if (userLetter === correctLetter) {
            isCorrect = true;
        }

        this.state.quizAnswered = true;
        this.state.selectedQuizOption = selectedKey;
        if (isCorrect) this.state.score++;
        
        this.updateUI();
    },

    nextQuizQuestion() {
        const total = this.state.quizQuestions.length;
        if (this.state.currentExerciseIndex < total - 1) {
            this.state.currentExerciseIndex++;
            this.state.quizAnswered = false;
            this.state.selectedQuizOption = null;
            this.updateUI();
        } else {
            this.finishGame("Quiz", total);
        }
    },

    // Matching - REFACTORED v3.6.5 (Value Based)
    handleMatchCard(index) {
        const cards = this.state.matchingCards;
        const card = cards[index]; // Current card
        const solved = this.state.matchingSolved;
        const selected = this.state.matchingSelected; // Previously selected {index, id}

        // Ignore if solved or clicked same card
        if (solved.includes(card.id) || (selected !== null && selected.index === index)) return;

        // First selection
        if (selected === null) {
            this.state.matchingSelected = { index, id: card.id }; 
            this.updateUI();
            return;
        }

        // Second selection - Value Based Logic
        const val1 = cards[selected.index].text;
        const val2 = card.text;
        
        const allPairs = this.state.currentData.lessonData.matchingPairs;

        const isMatch = allPairs.some(p => {
            const p1 = p.pair1 || p.term || p.left;
            const p2 = p.pair2 || p.definition || p.right;
            return (p1 === val1 && p2 === val2) || (p1 === val2 && p2 === val1);
        });

        if (isMatch) {
            this.state.matchingSolved.push(card.id, selected.id); // Add unique IDs
            this.state.matchingSelected = null;
            
            // Check win - all cards solved (cards.length)
            if (this.state.matchingSolved.length === cards.length) {
                 this.state.score = this.state.matchingSolved.length / 2;
                 setTimeout(() => this.finishGame("Pary", this.state.matchingCards.length / 2), 500);
            }
        } else {
            this.state.lives--;
            this.state.matchingError = [selected.id, card.id];
            this.updateUI();
            
            setTimeout(() => {
                this.state.matchingError = [];
                this.state.matchingSelected = null;
                
                if (this.state.lives === 0) {
                    this.state.score = this.state.matchingSolved.length / 2;
                    this.finishGame("Pary", this.state.matchingCards.length / 2, { defeat: true });
                    return;
                }

                if (this.state.lives > 0) {
                    this.updateUI();
                }
            }, 1000);
            return;
        }
        this.updateUI();
    },

    // True/False
    handleTFAnswer(userChoice) { 
        if (this.state.quizAnswered) return;
        
        const q = this.state.currentData.testData.trueFalse[this.state.currentExerciseIndex];
        let correct = q.answer || q.ans;
        const isTrue = String(correct).toLowerCase() === 'true';

        const isCorrect = (userChoice === isTrue);

        this.state.quizAnswered = true;
        this.state.selectedQuizOption = userChoice;
        if (isCorrect) this.state.score++;
        
        this.updateUI();
    },
    
    nextTFQuestion() {
        const total = this.state.currentData.testData.trueFalse.length;
        if (this.state.currentExerciseIndex < total - 1) {
            this.state.currentExerciseIndex++;
            this.state.quizAnswered = false;
            this.state.selectedQuizOption = null;
            this.updateUI();
        } else {
            this.finishGame("Prawda/Fałsz", total);
        }
    },

    getResultTier(percentage) {
        if (percentage >= 100) return { icon: 'trophy', tier: 'perfect' };
        if (percentage >= 71) return { icon: 'smile', tier: 'good' };
        if (percentage >= 36) return { icon: 'meh', tier: 'mid' };
        return { icon: 'skull', tier: 'bad' };
    },

    getRandomFeedbackMessage(tier) {
        const messages = FEEDBACK_MESSAGES[tier] || FEEDBACK_MESSAGES.bad;
        return messages[Math.floor(Math.random() * messages.length)];
    },

    finishGame(mode, total, options = {}) {
        this.state.view = 'GAME_RESULT';
        const percentage = total > 0 ? (this.state.score / total) * 100 : 0;
        const resultTier = this.getResultTier(percentage);
        const feedbackMessage = this.getRandomFeedbackMessage(resultTier.tier);

        this.state.gameResult = {
            mode,
            total,
            defeat: Boolean(options.defeat),
            resultIcon: resultTier.icon,
            resultTier: resultTier.tier,
            feedbackMessage
        };
        
        if (resultTier.icon === 'trophy' && window.confetti) {
            window.confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#10b981', '#3b82f6', '#fbbf24']
            });
        }
        
        this.updateUI();
    },

    // --- DATA LOADING & MULTI-FETCH ---

    async loadLessonData(topicId, topicTitle) {
        this.state.topicId = topicId;
        this.state.topicTitle = topicTitle;
        this.state.view = 'LOADING';
        this.updateUI();

        const sClass = 'k' + sanitizePath(this.state.classId).replace(/^k/, '');
        const sLevel = sanitizePath(this.state.levelId);
        const sUnit = sanitizePath(this.state.unitId);
        
        // [FIX] Usunięcie prefiksu 't' z ID, aby uniknąć podwójnego 'tt' w URL
        const cleanTopic = sanitizePath(topicId).replace(/^t/, '');
        
        // Budowanie ścieżki - wymuszenie formatu t[numer].json
        const url = `./data/${sClass}/${sLevel}/${sUnit}/t${cleanTopic}.json`;
        
        this.state.lastAttemptedUrl = url;

        try {
            // MOCK FOR PREVIEW (Zachowane dla bezpieczeństwa podglądu)
            if (url.includes('dz5/t1') && window.location.href.includes('usercontent')) {
                console.log('⚠️ Using Mock Data for Preview');
                await new Promise(r => setTimeout(r, 600));
                this.state.currentData = this.getMockData(topicTitle);
                this.verifyAndRenderLesson();
                return;
            }

            const response = await fetch(url);
            
            if (!response.ok) {
                if (response.status === 404) {
                    this.state.view = 'REMOVED';
                    this.updateUI();
                    return;
                }
                throw new Error(`HTTP ${response.status} - Plik nie istnieje`);
            }
            
            const text = await response.text();
            if (!text || text.trim() === '') {
                this.state.view = 'REMOVED';
                this.updateUI();
                return;
            }
            
            const json = JSON.parse(text);
            
            // [POPRAWKA] Inteligentne sprawdzanie ID (Smart ID Check)
            if (json.metadata && json.metadata.id) {
                const fileId = json.metadata.id;
                if (fileId !== topicId && !fileId.endsWith('-' + topicId)) {
                        console.warn(`Metadata ID mismatch: Expected to end with ${topicId}, got ${fileId}`);
                }
            }

            if (!json.lessonData && !json.testData) throw new Error("Pusty lub błędny JSON");

            this.state.currentData = json;
            this.verifyAndRenderLesson();

        } catch (error) {
            console.error("❌ Fetch Error:", error);
            this.state.errorMsg = error.message;
            this.state.view = 'ERROR';
            this.updateUI();
        }
    },

    async loadUnitData() {
        this.state.view = 'LOADING';
        this.state.topicId = 'UNIT_REVIEW'; // Marker flag
        this.state.topicTitle = `Powtórka: ${this.state.unitTitle}`;
        this.updateUI();

        // 1. Get all topics in current unit
        const units = CURRICULUM[this.state.classId]?.[this.state.levelId] || [];
        const currentUnit = units.find(u => u.id === this.state.unitId);
        if (!currentUnit || !currentUnit.topics) return;

        const sClass = 'k' + sanitizePath(this.state.classId).replace(/^k/, '');
        const sLevel = sanitizePath(this.state.levelId);
        const sUnit = sanitizePath(this.state.unitId);

        // 2. Map all topics to promises
        const promises = currentUnit.topics.map(topic => {
            // [FIX] Użycie tej samej logiki co w loadLessonData
            const cleanTopic = sanitizePath(topic.id).replace(/^t/, '');
            const url = `./data/${sClass}/${sLevel}/${sUnit}/t${cleanTopic}.json`;
            
            // Handle Mock Logic within promise for consistency in preview
            if (url.includes('dz5') && window.location.href.includes('usercontent')) {
                return Promise.resolve(this.getMockData(topic.title)); 
            }

            return fetch(url).then(res => res.ok ? res.json() : null).catch(() => null);
        });

        try {
            const results = await Promise.all(promises);
            
            // 3. Merge Data
            const mergedData = {
                lessonData: { flashcards: [], matchingPairs: [] },
                testData: { quiz: [], trueFalse: [] }
            };

            results.forEach(res => {
                if (res) {
                    if (res.lessonData?.flashcards) mergedData.lessonData.flashcards.push(...res.lessonData.flashcards);
                    if (res.testData?.quiz) mergedData.testData.quiz.push(...res.testData.quiz);
                }
            });

            if (mergedData.lessonData.flashcards.length === 0 && mergedData.testData.quiz.length === 0) {
                throw new Error("Brak danych w całym dziale.");
            }

            this.state.currentData = mergedData;
            this.state.view = 'UNIT_MODE_SELECT';
            this.updateUI();

        } catch (error) {
            this.state.errorMsg = "Błąd pobierania danych działu.";
            this.state.view = 'ERROR';
            this.updateUI();
        }
    },

    getMockData(title) {
        // Return structure for mocks
        return {
            meta: { title },
            lessonData: {
                flashcards: [ { term: "Test " + title, definition: "Definicja " + title } ],
                matchingPairs: []
            },
            testData: {
                quiz: [ { q: "Pytanie z " + title, options: ["A", "B"], ans: 0 } ],
                trueFalse: []
            }
        };
    },

    verifyAndRenderLesson() {
        this.state.view = 'LESSON_SELECT';
        this.updateUI();
    },

    // --- BUG REPORT SYSTEM START ---
    openBugReport() {
        const state = this.state;
        let content = "Brak danych";

        // Detekcja kontekstu
        if (state.gameView === 'FLASHCARDS' && state.activeFlashcards && state.activeFlashcards.length > 0) {
            const item = state.activeFlashcards[state.currentExerciseIndex];
            const term = item.term || item.content || "N/A";
            content = `TRYB: Fiszki | Termin: ${term}`;
        } else if (state.gameView === 'MATCHING') {
            content = `TRYB: Pary | Temat ID: ${state.topicId}`;
        } else if (state.gameView === 'QUIZ' && state.quizQuestions && state.quizQuestions.length > 0) {
            const q = state.quizQuestions[state.currentExerciseIndex];
            const qText = q.q || q.question || q.sentence || "Brak treści";
            content = `TRYB: Quiz | Pytanie: ${qText.substring(0, 50)}...`;
        } else if (state.gameView === 'TF') {
             const q = state.currentData?.testData?.trueFalse?.[state.currentExerciseIndex];
             if (q) {
                const qText = q.question || q.sentence || "Brak treści";
                content = `TRYB: P/F | Pytanie: ${qText.substring(0, 50)}...`;
             } else {
                content = `TRYB: P/F | Błąd indeksu`;
             }
        } else {
            content = `WIDOK: ${state.view}`;
        }

        const fullContext = `Klasa: ${state.classId} | Dział: ${state.unitId} | Temat: ${state.topicId} | ${content}`;
        
        document.getElementById('bugContext').value = fullContext;
        document.getElementById('bugStatus').innerHTML = '';
        document.getElementById('bugModal').classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    },

    closeBugReport() {
        document.getElementById('bugModal').classList.add('hidden');
        document.getElementById('bugForm').reset();
    },

    submitBugReport(e) {
        e.preventDefault();
        const statusDiv = document.getElementById('bugStatus');
        const form = document.getElementById('bugForm');
        statusDiv.innerHTML = '<span class="text-slate-500 animate-pulse">Wysyłanie...</span>';

        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData));

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: json
        })
        .then(async (response) => {
            if (response.status === 200) {
                statusDiv.innerHTML = '<span class="text-emerald-600 font-bold">✅ Wysłano pomyślnie!</span>';
                setTimeout(() => { this.closeBugReport(); }, 2000);
            } else {
                statusDiv.innerHTML = '<span class="text-red-500 font-bold">❌ Błąd wysyłania.</span>';
            }
        })
        .catch(error => {
            console.log(error);
            statusDiv.innerHTML = '<span class="text-red-500 font-bold">❌ Błąd połączenia.</span>';
        });
    },
    // --- BUG REPORT SYSTEM END ---

    // --- UI RENDERER ---

    updateUI() {
        const root = document.getElementById('app-root');
        const backBtn = document.getElementById('back-btn');
        const breadcrumbs = document.getElementById('breadcrumbs');

        // Nawigacja
        if (this.state.view === 'HOME') {
            backBtn.classList.add('hidden');
            if (breadcrumbs) breadcrumbs.classList.add('hidden');
        } else {
            backBtn.classList.remove('hidden');
            if (breadcrumbs) breadcrumbs.classList.remove('hidden');
            backBtn.onclick = () => this.goBack();
        }

        // Renderowanie widoków
        switch(this.state.view) {
            case 'HOME': root.innerHTML = this.htmlHome(); break;
            case 'LEVEL': root.innerHTML = this.htmlLevel(); break;
            case 'UNITS': root.innerHTML = this.htmlUnits(); break;
            case 'TOPICS': root.innerHTML = this.htmlTopics(); break;
            case 'LOADING': root.innerHTML = this.htmlLoading(); break;
            case 'LESSON_SELECT': root.innerHTML = this.htmlLessonSelect(); break;
            case 'UNIT_MODE_SELECT': root.innerHTML = this.htmlUnitModeSelect(); break;
            case 'GAME_VIEW': root.innerHTML = this.htmlGameView(); break;
            case 'GAME_RESULT': root.innerHTML = this.htmlGameResult(); break;
            case 'ERROR': root.innerHTML = this.htmlError(); break;
            case 'REMOVED': root.innerHTML = this.htmlRemoved(); break;
            default: root.innerHTML = this.htmlError(); break;
        }

        // Dynamiczne okruszki chleba (Breadcrumbs)
        if (breadcrumbs) {
            let bcHtml = '';
            if (this.state.view === 'TOPICS') bcHtml = `<span class="text-slate-500">${this.state.unitId}</span>`;
            if (this.state.view === 'LESSON_SELECT') bcHtml = `<span class="text-slate-400">${this.state.unitId}</span> <i data-lucide="chevron-right" class="w-3 h-3 text-slate-300"></i> <span class="text-slate-600 truncate">${this.state.topicTitle}</span>`;
            if (this.state.view === 'GAME_VIEW' || this.state.view === 'GAME_RESULT') bcHtml = `<span class="text-slate-400">${this.state.unitId}</span> <i data-lucide="chevron-right" class="w-3 h-3 text-slate-300"></i> <span class="text-slate-600 truncate">${this.state.topicTitle}</span>`;
            breadcrumbs.innerHTML = bcHtml;
        }

        if (window.lucide) window.lucide.createIcons();
    }
};

// URUCHOMIENIE
document.addEventListener('DOMContentLoaded', () => app.init());
