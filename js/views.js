// ==============================================
// GEOHUB VIEWS - HTML TEMPLATES
// ==============================================

const appViews = {
    htmlHome() {
        return `
            <div class="animate-fade-in-up">
                <div class="flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-2 -mt-4 sm:-mt-2 md:-mt-4 mb-4 md:mb-10">
                    <div class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 relative z-10 mt-0 mb-1 md:mb-2">
                        <img src="assets/logo_vector.svg" alt="GeoHub Logo" class="w-full h-full object-contain drop-shadow-lg" style="filter: saturate(0.75);">
                    </div>

                    <div class="flex flex-col items-center relative z-20">
                        <div class="flex flex-col items-center cursor-default drop-shadow-md mb-2">
                            <span class="text-7xl md:text-8xl font-bold tracking-tight text-[#169d72] leading-none" style="font-family: 'Fredoka', sans-serif;">GEO</span>
                            <div class="flex items-center gap-3 -mt-1 md:-mt-2">
                                <div class="h-[2px] w-8 md:w-12 bg-[#354253] rounded-full opacity-60"></div>
                                <span class="text-5xl md:text-6xl font-bold tracking-tight text-[#354253] leading-none pb-1" style="font-family: 'Fredoka', sans-serif;">hub</span>
                                <div class="h-[2px] w-8 md:w-12 bg-[#354253] rounded-full opacity-60"></div>
                            </div>
                        </div>
                        
                        <div class="inline-flex items-center gap-1.5 px-3 py-0.5 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200 shadow-sm mt-1 mb-1">
                            <i data-lucide="wrench" class="w-3.5 h-3.5 text-slate-500"></i>
                            <span class="text-[9px] font-black text-slate-500 uppercase tracking-widest">BETA</span>
                        </div>
                        
                        <p class="text-[10px] sm:text-[11px] md:text-sm text-slate-500 font-medium leading-tight max-w-xs mx-auto px-2 mt-2">
                            Aplikacja do nauki i powtórek z geografii na poziomie rozszerzonym. 
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 px-2 max-w-4xl mx-auto">
                    <h2 class="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Program Nauczania 2026</h2>
                    <div class="h-[1px] w-full bg-slate-200"></div>
                </div>

                <div class="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto pb-12 sm:pb-16">

                    <div onclick="app.goToLevel(1)" class="group home-class-tile glass-tile glass-tile-emerald p-3 sm:p-4 md:p-8 relative overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[300px] cursor-pointer">
                        <div class="absolute right-[-20px] bottom-[-20px] md:right-[-64px] md:bottom-[-24px] opacity-[0.04] text-emerald-500 group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                            <i data-lucide="globe" class="w-32 h-32 md:w-64 md:h-64"></i>
                        </div>
                        <div class="relative z-10 flex justify-between items-start">
                            <div class="w-10 h-10 md:w-16 md:h-16 bg-white/90 shadow-sm border border-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-500">
                                <i data-lucide="globe" class="w-5 h-5 md:w-8 md:h-8 text-emerald-500 icon-bounce"></i>
                            </div>
                            <div class="text-right pointer-events-none">
                                <span class="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest block">Klasa</span>
                                <span class="text-6xl md:text-9xl font-black text-slate-300/40 group-hover:text-emerald-500/80 transition-colors duration-500 leading-none font-fredoka">1</span>
                            </div>
                        </div>
                        <div class="relative z-10 mt-auto home-tile-footer">
                            <h3 class="home-tile-title text-base md:text-2xl font-regular text-slate-800 md:mb-2 leading-tight font-fredoka">Geografia Fizyczna</h3>
                            <div class="btn-rozpocznij home-tile-cta text-emerald-600 transition-transform duration-300 group-hover:translate-x-2">
                                Rozpocznij <i data-lucide="play" class="w-4 h-4 ml-2"></i>
                            </div>
                        </div>
                    </div>

                    <div onclick="app.goToLevel(2)" class="group home-class-tile glass-tile glass-tile-blue p-3 sm:p-4 md:p-8 relative overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[300px] cursor-pointer">
                        <div class="absolute right-[-20px] bottom-[-20px] md:right-[-12px] md:bottom-[-12px] opacity-[0.04] text-blue-500 group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                            <i data-lucide="users" class="w-32 h-32 md:w-64 md:h-64"></i>
                        </div>
                        <div class="relative z-10 flex justify-between items-start">
                            <div class="w-10 h-10 md:w-16 md:h-16 bg-white/90 shadow-sm border border-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-500">
                                <i data-lucide="users" class="w-5 h-5 md:w-8 md:h-8 text-blue-500 icon-bounce"></i>
                            </div>
                            <div class="text-right pointer-events-none">
                                <span class="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest block">Klasa</span>
                                <span class="text-6xl md:text-9xl font-black text-slate-300/40 group-hover:text-blue-500/80 transition-colors duration-500 leading-none font-fredoka">2</span>
                            </div>
                        </div>
                        <div class="relative z-10 mt-auto home-tile-footer">
                            <h3 class="home-tile-title text-base md:text-2xl font-regular text-slate-800 md:mb-2 leading-tight font-fredoka">Geografia społeczno-ekonomiczna</h3>
                            <div class="btn-rozpocznij home-tile-cta text-blue-600 transition-transform duration-300 group-hover:translate-x-2">
                                Rozpocznij <i data-lucide="play" class="w-4 h-4 ml-2"></i>
                            </div>
                        </div>
                    </div>

                    <div onclick="app.goToLevel(3)" class="group home-class-tile glass-tile glass-tile-rose p-3 sm:p-4 md:p-8 relative overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[300px] cursor-pointer">
                        <div class="absolute right-[-20px] bottom-[-20px] md:right-[-32px] md:bottom-[-40px] opacity-[0.04] text-rose-500 group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                            <i data-lucide="map" class="w-32 h-32 md:w-64 md:h-64"></i>
                        </div>
                        <div class="relative z-10 flex justify-between items-start">
                            <div class="w-10 h-10 md:w-16 md:h-16 bg-white/90 shadow-sm border border-rose-100 rounded-2xl flex items-center justify-center group-hover:bg-rose-50 transition-colors duration-500">
                                <i data-lucide="map" class="w-5 h-5 md:w-8 md:h-8 text-rose-500 icon-bounce"></i>
                            </div>
                            <div class="text-right pointer-events-none">
                                <span class="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest block">Klasa</span>
                                <span class="text-6xl md:text-9xl font-black text-slate-300/40 group-hover:text-rose-500/80 transition-colors duration-500 leading-none font-fredoka">3</span>
                            </div>
                        </div>
                        <div class="relative z-10 mt-auto home-tile-footer">
                            <h3 class="home-tile-title text-base md:text-2xl font-regular text-slate-800 md:mb-2 leading-tight font-fredoka">Geografia Polski</h3>
                            <div class="btn-rozpocznij home-tile-cta text-rose-600 transition-transform duration-300 group-hover:translate-x-2">
                                Rozpocznij <i data-lucide="play" class="w-4 h-4 ml-2"></i>
                            </div>
                        </div>
                    </div>

                    <div class="home-class-tile glass-tile p-3 sm:p-4 md:p-8 relative overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[300px] grayscale opacity-40 cursor-not-allowed">
                        <div class="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div class="bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-3 rounded-2xl shadow-lg flex flex-col items-center gap-1.5 transform -rotate-2">
                                <i data-lucide="lock" class="w-5 h-5 text-slate-500"></i>
                                <span class="text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-widest text-center">Wkrótce</span>
                            </div>
                        </div>
                        <div class="relative z-10 flex justify-between items-start opacity-30">
                            <div class="w-10 h-10 md:w-16 md:h-16 bg-slate-200 rounded-2xl flex items-center justify-center">
                                <i data-lucide="graduation-cap" class="w-5 h-5 md:w-8 md:h-8 text-yellow-500"></i>
                            </div>
                            <div class="text-right">
                                <span class="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest block">Klasa</span>
                                <span class="text-6xl md:text-9xl font-black text-slate-200 leading-none font-fredoka">4</span>
                            </div>
                        </div>
                        <div class="relative z-10 opacity-30 home-tile-footer">
                            <h3 class="home-tile-title text-base md:text-2xl font-regular text-slate-700 leading-tight font-fredoka">Relacje człowiek-środowisko</h3>
                            <div class="btn-rozpocznij home-tile-cta opacity-0 pointer-events-none select-none">
                                Rozpocznij <i data-lucide="play" class="w-4 h-4 ml-2"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;
    },

    htmlUnitModeSelect() {
        const fcCount = this.state.currentData.lessonData?.flashcards?.length || 0;
        const quizCount = this.state.currentData.testData?.quiz?.length || 0;

        return `
            <div class="animate-fade-in text-center pt-8">
                <h2 class="text-xl font-bold text-slate-800 mb-2">Powtórka Działu</h2>
                <p class="text-slate-500 text-sm mb-8">Zebraliśmy materiały ze wszystkich tematów.</p>

                <div class="grid gap-4 max-w-sm mx-auto">
                    <button onclick="app.startGame('FLASHCARDS')" class="bg-primary-600 text-white p-4 rounded-xl font-bold shadow-md hover:bg-primary-700 transition flex items-center justify-center gap-3">
                        <i data-lucide="copy" class="w-6 h-6"></i>
                        NAUKA - WSZYSTKIE FISZKI (${fcCount})
                    </button>
                    
                    <div class="bg-white border border-slate-200 p-4 rounded-xl">
                        <div class="flex items-center justify-center gap-2 text-slate-800 font-bold mb-4">
                            <i data-lucide="help-circle" class="w-5 h-5 text-orange-500"></i>
                            TEST - QUIZ (${quizCount} pytań)
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                            <button onclick="app.startGame('QUIZ', 10)" class="bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 py-2 rounded-lg font-medium transition">10</button>
                            <button onclick="app.startGame('QUIZ', 20)" class="bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 py-2 rounded-lg font-medium transition">20</button>
                            <button onclick="app.startGame('QUIZ', 0)" class="bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 py-2 rounded-lg font-medium transition">Wszystkie</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    htmlLessonSelect() {
        const data = this.state.currentData;
        const fcCount = data.lessonData?.flashcards?.length || 0;
        const pairCount = data.lessonData?.matchingPairs?.length || 0;
        const quizCount = data.testData?.quiz?.length || 0;
        const tfCount = data.testData?.trueFalse?.length || 0;

        const units = CURRICULUM[this.state.classId]?.[this.state.levelId] || [];
        const currentUnit = units.find(u => u.id === this.state.unitId);
        const icon = currentUnit ? this.formatIcon(currentUnit.icon) : 'book';

        return `
            <div class="animate-fade-in-up">
                <div class="text-center mb-6 sm:mb-10">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-3 sm:mb-5 border border-primary-100">
                        <i data-lucide="${icon}" class="w-8 h-8"></i>
                    </div>
                    <h2 class="text-2xl font-extrabold text-slate-800 leading-tight px-2">${this.state.topicTitle}</h2>
                    <p class="text-slate-500 text-sm mt-2 sm:mt-3 font-medium">Wybierz, w jaki sposób chcesz opanować ten materiał</p>
                </div>

                <div class="grid gap-3 sm:gap-6">
                    <div class="paper-card p-4 sm:p-6 border-l-4 border-l-primary-500 hover:border-primary-500 hover:ring-2 hover:ring-primary-50 relative overflow-hidden transition-all">
                        <div class="absolute -right-4 -top-4 opacity-5 text-primary-600 pointer-events-none">
                            <i data-lucide="book-open" class="w-32 h-32"></i>
                        </div>
                        <h3 class="text-xs font-bold text-primary-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <i data-lucide="graduation-cap" class="w-4 h-4"></i> Przyswajanie wiedzy
                        </h3>
                        <div class="grid grid-cols-2 gap-3 sm:gap-4">
                            <button onclick="app.startGame('FLASHCARDS')" class="group bg-white border border-slate-200 text-slate-700 py-4 px-3 rounded-xl font-bold text-sm transition-all shadow-sm flex flex-col items-center gap-2 hover:border-primary-500 hover:text-primary-700 hover:bg-primary-50 active:scale-95">
                                <div class="p-2 bg-slate-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                                    <i data-lucide="copy" class="w-5 h-5"></i>
                                </div>
                                <span>Fiszki (${fcCount})</span>
                            </button>
                            <button onclick="app.startGame('MATCHING')" class="group bg-white border border-slate-200 text-slate-700 py-4 px-3 rounded-xl font-bold text-sm transition-all shadow-sm flex flex-col items-center gap-2 hover:border-primary-500 hover:text-primary-700 hover:bg-primary-50 active:scale-95">
                                <div class="p-2 bg-slate-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                                    <i data-lucide="combine" class="w-5 h-5"></i>
                                </div>
                                <span>Pary (${pairCount})</span>
                            </button>
                        </div>
                    </div>

                    <div class="paper-card p-4 sm:p-6 border-l-4 border-l-orange-400 hover:border-orange-400 hover:ring-2 hover:ring-orange-50 relative overflow-hidden transition-all">
                        <div class="absolute -right-4 -top-4 opacity-5 text-orange-600 pointer-events-none">
                            <i data-lucide="check-square" class="w-32 h-32"></i>
                        </div>
                        <h3 class="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <i data-lucide="help-circle" class="w-4 h-4"></i> Sprawdź się
                        </h3>
                        <div class="grid grid-cols-2 gap-3 sm:gap-4">
                            <button onclick="app.startGame('QUIZ')" class="group bg-white border border-slate-200 hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50 text-slate-700 py-4 px-3 rounded-xl font-bold text-sm transition-all shadow-sm flex flex-col items-center gap-2 active:scale-95">
                                <div class="p-2 bg-slate-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                                    <i data-lucide="help-circle" class="w-5 h-5"></i>
                                </div>
                                <span>Quiz (${quizCount})</span>
                            </button>
                            <button onclick="app.startGame('TF')" class="group bg-white border border-slate-200 hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50 text-slate-700 py-4 px-3 rounded-xl font-bold text-sm transition-all shadow-sm flex flex-col items-center gap-2 active:scale-95">
                                <div class="p-2 bg-slate-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                                    <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                                </div>
                                <span>P/F (${tfCount})</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    htmlLevel() {
        return `
            <div class="text-center mb-10 animate-fade-in-up">
                <div class="inline-block px-3 py-1 bg-primary-50 rounded-full mb-3">
                    <span class="text-xs font-bold text-primary-700 uppercase tracking-widest">Klasa ${this.state.classId}</span>
                </div>
                <h2 class="text-3xl font-extrabold text-slate-800 font-fredoka">Wybierz Poziom</h2>
                <p class="text-slate-500 text-sm mt-2 font-medium">Dopasuj zakres materiału do swojego profilu</p>
            </div>
            <div class="grid gap-5 max-w-md mx-auto animate-fade-in-up delay-100">
                <button onclick="app.goToUnits('p')" class="paper-card p-6 flex items-center justify-between group text-left border-l-4 border-l-transparent hover:border-l-blue-500 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="p-3 bg-blue-50 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <i data-lucide="leaf" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <div class="text-lg font-bold text-slate-800 group-hover:text-blue-700">Podstawowy (P)</div>
                            <div class="text-xs text-slate-400 font-medium mt-0.5">Wiedza ogólna</div>
                        </div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"></i>
                </button>
                
                <button onclick="app.goToUnits('r')" class="paper-card p-6 flex items-center justify-between group text-left border-l-4 border-l-transparent hover:border-l-primary-500 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="p-3 bg-primary-50 rounded-xl text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                            <i data-lucide="layers" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <div class="text-lg font-bold text-slate-800 group-hover:text-primary-700">Rozszerzony (R)</div>
                            <div class="text-xs text-slate-400 font-medium mt-0.5">Matura z geografii</div>
                        </div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"></i>
                </button>
            </div>
        `;
    },

    htmlUnits() {
        const units = CURRICULUM[this.state.classId]?.[this.state.levelId] || [];
        if (units.length === 0) return this.htmlEmpty("Brak zaplanowanych działów w tej sekcji.");

        return `
            <div class="mb-4 sm:mb-8 animate-fade-in-up">
                <h2 class="text-3xl font-bold text-slate-800 font-plus-jakarta-sans">Działy Tematyczne</h2>
                <p class="text-sm text-slate-500 mt-1 font-medium">Wybierz dział którego chcesz się nauczyć</p>
            </div>
            <div class="grid gap-4 animate-fade-in-up delay-100">
                ${units.map((unit, idx) => `
                    <button onclick="app.goToTopics('${unit.id}', '${unit.title}')" class="paper-card p-3 sm:p-5 flex items-center gap-4 sm:gap-5 text-left group hover:bg-slate-50/50">
                        <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors shadow-sm">
                            <i data-lucide="${this.formatIcon(unit.icon)}" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-grow">
                            <h3 class="font-bold text-slate-700 group-hover:text-slate-900 text-[15px] sm:text-base leading-snug">${unit.title}</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="inline-block w-2 h-2 rounded-full bg-slate-200 group-hover:bg-primary-400"></span>
                                <p class="text-xs font-semibold text-slate-400">${unit.topics.length} tematów</p>
                            </div>
                        </div>
                        <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300 group-hover:text-primary-500"></i>
                    </button>
                `).join('')}
            </div>
        `;
    },

    htmlTopics() {
        const units = CURRICULUM[this.state.classId]?.[this.state.levelId] || [];
        const currentUnit = units.find(u => u.id === this.state.unitId);
        const topics = currentUnit ? currentUnit.topics : [];

        return `
            <div class="mb-4 sm:mb-8 animate-fade-in-up">
                <div class="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase bg-slate-100 px-3 py-1 rounded-full mb-3">
                    <i data-lucide="folder" class="w-3 h-3"></i> ${this.state.unitId}
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">${this.state.unitTitle}</h2>
            </div>
            
            <div class="animate-fade-in-up delay-100">
                <button onclick="app.loadUnitData()" class="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl py-4 font-bold shadow-lg hover:shadow-xl hover:from-orange-500 hover:to-orange-600 transition-all mb-4 sm:mb-8 flex items-center justify-center gap-3 active:scale-[0.98]">
                    <i data-lucide="flame" class="w-6 h-6"></i>
                    KOMPLEKSOWY TEST DZIAŁU
                </button>
            </div>

            <div class="grid gap-3 animate-fade-in-up delay-200">
                ${topics.map((topic, idx) => `
                    <button onclick="app.loadLessonData('${topic.id}', '${topic.title}')" class="paper-card p-4 sm:p-5 text-left w-full group hover:border-primary-500 transition-all flex items-center gap-4">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors border border-slate-100">
                            ${idx + 1}
                        </div>
                        <div class="flex-grow">
                            <h3 class="font-semibold text-slate-700 group-hover:text-slate-900 text-sm sm:text-base leading-snug">${topic.title}</h3>
                        </div>
                        <i data-lucide="play-circle" class="w-5 h-5 text-slate-200 group-hover:text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </button>
                `).join('')}
            </div>
        `;
    },

    htmlGameView() {
        const mode = this.state.gameView;
        let content = '';
        let modeLabel = '';
        let progress = 0;
        let progressColor = 'bg-primary-500';

        if (mode === 'FLASHCARDS') { 
            content = this.htmlGameFlashcards(); 
            modeLabel = "FISZKI"; 
            const total = this.state.currentData.lessonData.flashcards.length;
            progress = ((total - this.state.activeFlashcards.length) / total) * 100;
        }
        else if (mode === 'QUIZ') { 
            content = this.htmlGameQuiz(); 
            modeLabel = "QUIZ"; 
            progress = (this.state.currentExerciseIndex / this.state.quizQuestions.length) * 100;
            progressColor = 'bg-orange-400';
        }
        else if (mode === 'MATCHING') { 
            content = this.htmlGameMatching(); 
            modeLabel = "PARY"; 
            progress = (this.state.matchingSolved.length / this.state.matchingCards.length) * 100;
        }
        else if (mode === 'TF') { 
            content = this.htmlGameTF(); 
            modeLabel = "PRAWDA / FAŁSZ"; 
            progress = (this.state.currentExerciseIndex / this.state.currentData.testData.trueFalse.length) * 100;
            progressColor = 'bg-orange-400';
        }
        else content = this.htmlError();

        return `
            <div class="learning-layout animate-fade-in flex flex-col h-full min-h-[100dvh]">
                <div class="learning-header">
                    <div class="learning-header-top">
                        <span class="text-[9px] sm:text-[10px] font-black text-slate-600 uppercase tracking-[0.22em]">
                            ${modeLabel}
                        </span>
                        <button onclick="app.goBack()" class="p-1.5 sm:p-2 bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 border border-slate-200 rounded-xl shadow-sm transition-all active:scale-90 flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                    
                    <div class="learning-header-separator"></div>

                    <div class="learning-progress-full">
                        <div class="learning-progress-bar ${progressColor} transition-all duration-500" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div class="learning-content relative mt-1 sm:mt-2 flex flex-col flex-1 min-h-0">
                    ${content}
                </div>
            </div>
        `;
    },

    htmlGameFlashcards() {
        const cards = this.state.activeFlashcards;
        const index = this.state.currentExerciseIndex;
        const card = cards[index];
        const flippedClass = this.state.isFlipped ? 'is-flipped' : '';
        
        if (!card) return '';

        const term = card.term || card.content || "Brak pojęcia";
        const definition = card.definition || card.answer || "Brak definicji";

        let termFontSize = 'text-lg sm:text-2xl';
        const termLength = term.length;

        if (termLength > 25) {
            termFontSize = 'text-base sm:text-2xl leading-tight';
        } else if (termLength > 15) {
            termFontSize = 'text-lg sm:text-3xl leading-tight';
        }

        return `
            <div class="animate-fade-in-up flex flex-col h-full pt-2 sm:pt-6 min-h-0">
                <div class="flex justify-end mb-2 sm:mb-4">
                     <span class="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">Pozostało: ${cards.length}</span>
                </div>

                <div class="perspective-1000 mb-3 sm:mb-8 cursor-pointer group w-full max-w-sm mx-auto h-[40dvh] sm:h-[450px] min-h-[240px]" onclick="app.flipCard()">
                    <div class="relative w-full h-full transform-style-3d flip-card-inner ${flippedClass}">
                        
                        <div class="absolute inset-0 paper-card flex flex-col items-center justify-center p-4 sm:p-8 backface-hidden border-b-4 border-emerald-500 overflow-hidden bg-white">
                            <span class="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] uppercase font-black tracking-[0.2em] text-emerald-600 bg-emerald-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm">Pojęcie</span>
                            <div class="w-full text-center mt-2">
                                <h3 class="${termFontSize} font-extrabold text-center text-slate-800 break-words w-full px-2 sm:px-4">${term}</h3>
                            </div>
                            <div class="absolute bottom-4 sm:bottom-6 flex items-center gap-2 text-slate-400">
                                <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Kliknij, aby sprawdzić</span>
                            </div>
                        </div>

                        <div class="absolute inset-0 bg-white text-slate-800 rounded-xl shadow-xl flex flex-col items-center p-4 sm:p-8 backface-hidden rotate-y-180 border-b-4 border-slate-100 overflow-hidden card-back">
                            <span class="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 border border-white/10 bg-white/5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm">Definicja</span>
                            
                            <div class="w-full flex-grow flex items-center justify-center overflow-y-auto mt-10 mb-10 px-2 text-center">
                                <p class="text-sm sm:text-lg leading-snug font-bold text-center break-words w-full px-2 sm:px-4">${definition}</p>
                            </div>
                            
                            <div class="absolute bottom-4 sm:bottom-6 flex items-center gap-2 text-slate-400">
                                <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Powrót</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mb-3 sm:mb-6">
                    <button type="button" onclick="app.openBugReport()" class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-red-500 transition-all py-2 px-4 rounded-full hover:bg-red-50">
                        <i data-lucide="flag" class="w-3.5 h-3.5"></i> Zgłoś błąd
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-2 sm:gap-4 max-w-sm mx-auto w-full mt-auto mb-4 sm:mb-8">
                    <button onclick="event.stopPropagation(); app.navFlashcard(1)" class="py-3 sm:py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-xl font-bold transition hover:bg-slate-50 active:scale-95 shadow-sm flex flex-col items-center gap-1">
                        <i data-lucide="rotate-ccw" class="w-5 h-5 opacity-50"></i>
                        <span class="text-xs">Powtórz</span>
                    </button>
                    <button onclick="event.stopPropagation(); app.markFlashcardKnown()" class="py-3 sm:py-4 bg-primary-600 text-white rounded-xl font-bold shadow-soft hover:bg-primary-700 transition active:scale-95 flex flex-col items-center gap-1">
                        <i data-lucide="check" class="w-5 h-5"></i>
                        <span class="text-xs">Umiem to</span>
                    </button>
                </div>
            </div>
        `;
    },

    htmlGameMatching() {
        const cards = this.state.matchingCards;
        return `
            <div class="animate-fade-in flex flex-col h-full pt-4">
                <div class="bg-white/40 backdrop-blur-md rounded-3xl p-6 mb-8 border border-white shadow-xl text-center mx-auto max-w-lg">
                    <p class="text-sm text-slate-800 font-semibold leading-relaxed mb-4">Znajdź pasujące do siebie pojęcia i ich definicje. Pamiętaj: masz trzy życia na tej planecie. Nie strać ich łatwo.</p>
                    <div class="flex items-center justify-center gap-2 text-red-500">
                        ${Array.from({length: 3}).map((_, i) => `<i data-lucide="heart" class="w-6 h-6 ${i < this.state.lives ? 'fill-current animate-heartbeat' : 'opacity-20'}"></i>`).join('')}
                    </div>
                </div>

                <div class="flex justify-end mb-2">
                    <button type="button" onclick="app.openBugReport()" class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 hover:text-red-500 transition-colors py-1 px-2 rounded hover:bg-red-50">
                        <i data-lucide="flag" class="w-3 h-3"></i> Zgłoś błąd
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-3 pb-4">
                    ${cards.map((card, idx) => {
                        const solved = this.state.matchingSolved.includes(card.id);
                        const selected = this.state.matchingSelected?.index === idx;
                        let classes = "paper-card p-3 min-h-[90px] flex items-center justify-center text-center text-sm font-semibold cursor-pointer match-card select-none border-2";
                        
                        if (this.state.matchingError && this.state.matchingError.includes(card.id)) classes += " border-red-500 bg-red-50 text-red-600 animate-shake";
                        else if (solved) classes += " match-solved";
                        else if (selected) classes += " match-selected";
                        else classes += " border-slate-200 hover:border-primary-600";

                        return `
                            <div onclick="app.handleMatchCard(${idx})" class="${classes}">
                                ${card.text}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    htmlGameQuiz() {
        const questions = this.state.quizQuestions;
        const index = this.state.currentExerciseIndex;
        const q = questions[index];
        const isAnswered = this.state.quizAnswered;
        
        const questionText = q.question || q.q || q.sentence || "Brak treści pytania";
        const options = q.shuffledOptions;

        return `
            <div class="animate-fade-in-up flex flex-col h-full pt-2 sm:pt-6 max-w-xl mx-auto w-full min-h-0">
                <div class="flex justify-end mb-2 sm:mb-4">
                    <span class="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">Pytanie ${index + 1} / ${questions.length}</span>
                </div>

                <div class="paper-card p-4 sm:p-8 mb-2 sm:mb-6 border-b-4 border-b-orange-400 shadow-sm">
                    <h3 class="text-lg sm:text-2xl font-extrabold text-slate-800 leading-snug">${questionText}</h3>
                </div>

                <div class="mt-auto mb-4 sm:mb-8">
                    <div class="flex justify-end mb-2 sm:mb-3">
                        <button type="button" onclick="app.openBugReport()" class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 hover:text-red-500 transition-colors py-1 px-2 rounded hover:bg-red-50">
                            <i data-lucide="flag" class="w-3 h-3"></i> Zgłoś błąd
                        </button>
                    </div>

                    <div class="flex flex-col gap-2 sm:gap-3 mb-0">
                    ${options.map(([key, value], displayIndex) => {
                        let btnClass = "p-3 sm:p-4 pr-12 sm:pr-14 rounded-xl border-2 text-left transition-all duration-200 relative flex items-center gap-3 sm:gap-4 bg-white";
                        const isCorrectKey = (String(key) === String(q.correctKey) || String(String.fromCharCode(65 + parseInt(key))) === String(q.correctKey));
                        const isSelectedKey = (String(key) === String(this.state.selectedQuizOption));

                        if (isAnswered) {
                            if (isCorrectKey) btnClass = "p-3 sm:p-4 pr-12 sm:pr-14 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold flex items-center gap-3 sm:gap-4 relative shadow-md"; 
                            else if (isSelectedKey) btnClass = "p-3 sm:p-4 pr-12 sm:pr-14 rounded-xl border-2 border-red-500 bg-red-50 text-red-900 font-medium flex items-center gap-3 sm:gap-4 relative animate-shake"; 
                            else btnClass = "p-3 sm:p-4 pr-12 sm:pr-14 rounded-xl border-2 border-slate-100 opacity-40 flex items-center gap-3 sm:gap-4 relative"; 
                        } else { btnClass += " border-slate-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer shadow-sm hover:shadow-md"; }

                        const label = String.fromCharCode(65 + displayIndex);

                        return `
                            <button onclick="app.handleQuizAnswer('${key}')" ${isAnswered ? 'disabled' : ''} class="${btnClass}">
                                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${isAnswered && isCorrectKey ? 'bg-emerald-200 text-emerald-800' : isAnswered && isSelectedKey ? 'bg-red-200 text-red-800' : 'bg-slate-100 text-slate-500'} flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 transition-colors">
                                    ${label}
                                </div>
                                <span class="text-sm sm:text-base ${isAnswered && isCorrectKey ? 'font-bold' : 'font-medium'}">${value}</span>
                                ${isAnswered && isCorrectKey ? '<i data-lucide="check-circle" class="absolute right-4 text-emerald-500 w-6 h-6"></i>' : ''}
                                ${isAnswered && isSelectedKey && !isCorrectKey ? '<i data-lucide="x-circle" class="absolute right-4 text-red-500 w-6 h-6"></i>' : ''}
                            </button>
                        `;
                    }).join('')}
                    </div>
                </div>

                ${isAnswered && q.explanation ? `
                    <div class="mb-4 sm:mb-6 p-4 sm:p-5 bg-blue-50/80 text-blue-900 text-sm rounded-xl border border-blue-100 shadow-inner animate-fade-in-up">
                        <div class="font-bold flex items-center gap-2 mb-1 text-blue-700">
                            <i data-lucide="info" class="w-4 h-4"></i> Wyjaśnienie
                        </div>
                        ${q.explanation}
                    </div>
                ` : ''}

                ${isAnswered ? `
                    <button onclick="app.nextQuizQuestion()" class="w-full py-3 sm:py-4 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all active:scale-95 animate-fade-in-up">
                        ${index === questions.length - 1 ? 'Podsumuj Wyniki' : 'Kolejne Pytanie'}
                    </button>
                ` : ''}
            </div>
        `;
    },

    htmlGameTF() {
        const totalQs = this.state.currentData.testData.trueFalse.length;
        const index = this.state.currentExerciseIndex;
        const q = this.state.currentData.testData.trueFalse[index];
        const text = q.question || q.sentence || "Brak treści";
        const isAnswered = this.state.quizAnswered;
        const userSel = this.state.selectedQuizOption;

        let correct = q.answer || q.ans;
        const isTrue = String(correct).toLowerCase() === 'true';

        const getBtnClass = (val) => {
            if (!isAnswered) return "bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 shadow-sm";
            if (val === userSel) {
                if (val === isTrue) return "bg-emerald-500 border-2 border-emerald-600 text-white shadow-lg"; 
                else return "bg-red-500 border-2 border-red-600 text-white animate-shake shadow-lg"; 
            }
            if (val === isTrue && userSel !== isTrue) return "bg-white border-2 border-emerald-500 text-emerald-600 shadow-md ring-4 ring-emerald-50"; 
            return "opacity-40 bg-slate-50 border-2 border-slate-200";
        };

        return `
            <div class="flex flex-col h-full text-center px-2 animate-fade-in-up pt-2 sm:pt-6 w-full max-w-lg mx-auto min-h-0">
                <div class="w-full flex justify-end mb-2 sm:mb-4">
                    <span class="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">${index + 1} / ${totalQs}</span>
                </div>

                <div class="bg-white p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-soft border border-slate-200 w-full mb-4 sm:mb-8 mt-1 sm:mt-2 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                    <h3 class="text-lg sm:text-2xl font-extrabold text-slate-800 leading-snug">${text}</h3>
                </div>

                <div class="mt-auto w-full mb-4 sm:mb-8">
                    <div class="flex justify-end mb-2 sm:mb-4 w-full">
                        <button type="button" onclick="app.openBugReport()" class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 hover:text-red-500 transition-colors py-1 px-2 rounded hover:bg-red-50">
                            <i data-lucide="flag" class="w-3 h-3"></i> Zgłoś błąd
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-2 sm:gap-4 w-full mb-0">
                        <button onclick="app.handleTFAnswer(true)" ${isAnswered ? 'disabled' : ''} class="p-4 sm:p-8 rounded-2xl font-black text-base sm:text-lg transition-all active:scale-95 ${getBtnClass(true)}">PRAWDA</button>
                        <button onclick="app.handleTFAnswer(false)" ${isAnswered ? 'disabled' : ''} class="p-4 sm:p-8 rounded-2xl font-black text-base sm:text-lg transition-all active:scale-95 ${getBtnClass(false)}">FAŁSZ</button>
                    </div>
                </div>

                ${isAnswered ? `
                    <div class="w-full mb-4 sm:mb-6 animate-fade-in-up text-left">
                        <div class="p-4 rounded-xl border ${userSel === isTrue ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'} mb-4 flex items-center gap-3">
                            <i data-lucide="${userSel === isTrue ? 'check-circle' : 'x-circle'}" class="w-6 h-6 ${userSel === isTrue ? 'text-emerald-500' : 'text-red-500'} flex-shrink-0"></i>
                            <span class="font-bold">${userSel === isTrue ? 'Świetnie! Poprawna odpowiedź.' : 'Niestety, to błędna odpowiedź.'}</span>
                        </div>
                        
                        ${q.explanation ? `
                            <div class="p-5 bg-blue-50/80 text-blue-900 text-sm rounded-xl border border-blue-100 shadow-inner">
                                <div class="font-bold flex items-center gap-2 mb-2 text-blue-700">
                                    <i data-lucide="info" class="w-5 h-5"></i> Wyjaśnienie
                                </div>
                                <p class="leading-relaxed">${q.explanation}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <button onclick="app.nextTFQuestion()" class="w-full py-4 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-slate-700 transition-all active:scale-95 animate-fade-in-up">
                        ${index === totalQs - 1 ? 'Podsumuj Wyniki' : 'Kolejne Pytanie'}
                    </button>
                ` : ''}
            </div>
        `;
    },

    htmlGameResult() {
        const { mode, total, defeat = false, resultIcon, resultTier, feedbackMessage = '' } = this.state.gameResult;
        const score = this.state.score;
        const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
        
        let content = '';
        const finalTier = resultTier || (percentage === 100 ? 'perfect' : percentage >= 71 ? 'good' : percentage >= 36 ? 'mid' : 'bad');
        const finalIcon = resultIcon || (finalTier === 'perfect' ? 'trophy' : finalTier === 'good' ? 'smile' : finalTier === 'mid' ? 'meh' : 'skull');
        
        // Dynamic Icon and Colors based on performance
        let statusIcon = finalIcon;
        let ringColor = 'text-red-500';
        let bgColor = 'bg-red-50';
        let borderColor = 'border-red-100';
        let iconColor = 'text-red-500';

        if (finalTier === 'perfect') { 
            statusIcon = 'trophy'; ringColor = 'text-yellow-400'; bgColor = 'bg-yellow-50'; borderColor = 'border-yellow-100'; iconColor = 'text-yellow-600';
        } else if (finalTier === 'good') { 
            statusIcon = 'smile'; ringColor = 'text-emerald-500'; bgColor = 'bg-emerald-50'; borderColor = 'border-emerald-100'; iconColor = 'text-emerald-600';
        } else if (finalTier === 'mid') { 
            statusIcon = 'meh'; ringColor = 'text-amber-500'; bgColor = 'bg-amber-50'; borderColor = 'border-amber-100'; iconColor = 'text-amber-600';
        } else {
            statusIcon = 'skull'; ringColor = 'text-rose-500'; bgColor = 'bg-rose-50'; borderColor = 'border-rose-100'; iconColor = 'text-rose-600';
        }

        if (mode === 'Fiszki' || mode === 'Pary') {
            const isFlashcards = mode === 'Fiszki';
            const title = isFlashcards ? "Świetna robota!" : defeat ? "Koniec gry!" : percentage === 100 ? "Znakomicie!" : "Dobra robota!";
            const gameResultIcon = isFlashcards ? 'circle-check-big' : statusIcon;
            const gameResultIconColor = isFlashcards ? 'text-[#169d72]' : iconColor;
            const gameResultBgColor = isFlashcards ? 'bg-[#169d72]/10' : bgColor;
            const gameResultBorderColor = isFlashcards ? 'border-[#169d72]/30' : borderColor;
            content = `
                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl mb-8 w-full max-w-sm mx-auto text-center animate-fade-in-up">
                    <div class="w-20 h-20 ${gameResultBgColor} rounded-full flex items-center justify-center mx-auto mb-5 border ${gameResultBorderColor} shadow-lg">
                        <i data-lucide="${gameResultIcon}" class="w-10 h-10 ${gameResultIconColor}"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-800 mb-2">${title}</h3>
                    <p class="text-slate-500 font-medium">${defeat ? 'Wykorzystałeś wszystkie 3 życia. Spróbuj jeszcze raz!' : 'Zadanie ukończone.'}</p>
                </div>
            `;
        } else {
            const feedbackTitleMap = {
                bad: 'Kurcze, słabo... ale nie poddawaj się!',
                mid: 'Jest progres — ciśnij dalej!',
                good: 'Bardzo dobry wynik!',
                perfect: 'Perfekcyjnie!'
            };

            const feedbackTitle = feedbackTitleMap[finalTier] || 'Podsumowanie';
            const safeFeedbackMessage = feedbackMessage || 'Brak komunikatu zwrotnego.';

            content = `
                <div class="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/5 mb-8 w-full flex flex-col items-center text-center animate-fade-in-up relative">
                    <div class="relative w-48 h-48 flex items-center justify-center mb-8 z-10 rounded-full bg-white/40 backdrop-blur-md border border-white/80 shadow-xl">
                        <svg class="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path class="text-slate-200/60" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                            <path class="${ringColor}" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-dasharray="0, 100" style="--ring-percentage: ${percentage}; animation: apple-watch-ring 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.2s;" />
                        </svg>
                        <div class="text-center flex flex-col items-center">
                            <i data-lucide="${statusIcon}" class="w-12 h-12 ${ringColor} mb-2"></i>
                            <div class="text-4xl font-black text-slate-900 leading-none">${score}<span class="text-lg text-slate-400 font-bold">/${total}</span></div>
                        </div>
                    </div>

                    <div class="${bgColor} ${borderColor} border-2 p-6 rounded-2xl w-full text-center relative z-10 shadow-sm">
                        <h4 class="font-black text-2xl mb-2 ${iconColor}">${feedbackTitle}</h4>
                        <p class="text-slate-700 text-sm font-medium leading-relaxed">${safeFeedbackMessage}</p>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="flex flex-col items-center justify-center min-h-[70vh] text-center px-2 w-full max-w-md mx-auto pt-6">
                ${content}
                <div class="flex flex-col gap-3 w-full animate-fade-in-up delay-200">
                    <button onclick="app.startGame('${mode.includes('Fiszki') ? 'FLASHCARDS' : mode.includes('Pary') ? 'MATCHING' : mode.includes('Quiz') ? 'QUIZ' : 'TF'}')" class="w-full py-4 bg-white text-slate-700 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm">
                        <i data-lucide="refresh-cw" class="w-5 h-5 text-slate-400"></i> Rozwiąż Ponownie
                    </button>
                    <button onclick="app.goBack()" class="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2">
                        <i data-lucide="arrow-left" class="w-5 h-5"></i> Powrót do lekcji
                    </button>
                </div>
            </div>
        `;
    },

    htmlLoading() {
        return `
            <div class="flex flex-col items-center justify-center h-[50vh]">
                <div class="w-12 h-12 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
                <p class="text-sm text-slate-500 font-medium">Pobieranie materiałów...</p>
                <p class="text-xs text-slate-300 font-mono mt-2">data/k${sanitizePath(this.state.classId)}/...</p>
            </div>
        `;
    },

    htmlError() {
        return `
            <div class="flex flex-col items-center justify-center min-h-[50vh] px-4">
                <div class="w-full max-w-md p-8 text-red-600 bg-red-50 rounded-lg border border-red-200 text-center">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <i data-lucide="alert-triangle" class="w-6 h-6 text-red-600"></i>
                        </div>
                    </div>
                    <h3 class="font-bold text-lg mb-4 text-red-700">Błąd ładowania danych</h3>
                    
                    <ul class="text-left text-sm space-y-2 text-slate-600 list-disc pl-5 mb-6">
                        <li>Wyczyść pamięć podręczną przeglądarki (Cache).</li>
                        <li>Sprawdź czy plik istnieje na GitHubie.</li>
                        <li>Zweryfikuj poprawność składni JSON (przecinki, cudzysłowy).</li>
                    </ul>

                    <div class="mt-4 p-3 bg-slate-50 text-emerald-700 rounded-lg text-xs font-mono break-all border border-slate-200 shadow-inner text-left">
                        <span class="block text-slate-500 mb-1 uppercase text-[10px] font-bold tracking-wider">Attempted Path:</span>
                        > \${this.state.lastAttemptedUrl}
                    </div>
                </div>
                <button onclick="app.goBack()" class="mt-8 px-6 py-2.5 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200">
                    Wróć
                </button>
            </div>
        `;
    },

    htmlEmpty(msg) {
        return `
            <div class="text-center py-12 text-slate-400">
                <i data-lucide="inbox" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
                <p>${msg}</p>
            </div>
        `;
    },

    htmlRemoved() {
        const fallbackInfo = {
            title: 'Temat usunięty z podstawy programowej',
            message: 'Ten materiał nie jest już wymagany i został wycofany z obowiązującego programu nauczania. Nie musisz się go uczyć do matury. Fajnie, co? :D',
            icon: 'book-x'
        };

        const removedInfo = this.state.removedTopicInfo || fallbackInfo;

        return `
            <div class="flex flex-col items-center justify-center min-h-[50vh] px-4">
                <div class="flex flex-col items-center justify-center p-12 bg-slate-50 rounded-3xl border border-slate-200 border-dashed text-center w-full max-w-md mx-auto">
                    <div class="p-4 bg-slate-100 rounded-full mb-5">
                        <i data-lucide="${removedInfo.icon}" class="w-10 h-10 text-slate-400"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-700 mb-2">${removedInfo.title}</h3>
                    <p class="text-sm text-slate-500 max-w-md">
                        ${removedInfo.message}
                    </p>
                </div>
                <button onclick="app.goBack()" class="mt-8 px-6 py-2.5 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200">
                    Powrót do działów
                </button>
            </div>
        `;
    },

    formatIcon(name) {
        return name ? name.toLowerCase() : 'circle';
    }
};
