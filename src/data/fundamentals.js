export const fundamentalsCollection = {
	name: "lectures at each grade level",
	areas: [
		{
			name: "freshman",
			skills: [
				{
					/* block */
					name: "1학기",
					description: {
						text: "채워주세요",
						links: [
							["링크명칭", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"]
						]
					},
					/* block */
					skills: [
						{
							name: "대학글쓰기",
							description: {
								text:"대학글쓰기는 ~ ",
								links: [
									["링크명칭","#"]
								]
							},

							/* block */
							skills:[
								{
									name : "Action English",
									description:{
										text:"Action English는 ~",
										links:[
											["링크명칭","#"]
										]
									},
									/* block */
									skills:[
										{
											name : "기초컴퓨터프로그래밍",
											description:{
												text:"기초컴퓨터프로그래밍은 ~",
												links:[
													["링크 명칭","#"]
												]
											},
											/* block */
											skills:[
												{
													name : "수학 I",
													description:{
														text:"수학 I은 ~",
														links:[
															["링크 명칭","#"]
														]
													},
													/* block */
													skills:[
														{
															name : "빅데이터의이해와활용",
															description:{
																text:"빅데이터의 이해와 활용은 ~",
																links:[
																	["링크 명칭","#"]
																]
															},
															/* block */
															skills:[
																{
																	name : "창의공학설계",
																	description:{
																		text:"착의공학설계는 ~",
																		links:[
																			["링크 명칭","#"]
																		]
																	},
																	/* block */
																	skills:[
																		{
																			name : "미래설계탐색",
																			description:{
																				text:"미래설계탐색은 ~",
																				links:[
																					["링크 명칭","#"]
																				]
																			},
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]

						}
					]
				}
			]
		},
		{
			name: "sophormore",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of CSS and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - CSS Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"],
							["W3Schools - CSS Tutorial", "https://www.w3schools.com/css/default.asp"],
							["Supercharged - CSS Selectors", "https://www.youtube.com/watch?v=IKho_xDKaLw"],
							["MDN - CSS first steps", "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"],
							["MDN - CSS building blocks", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks"],
							["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
							["MDN - CSS Syntax", "https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax"],
						]
					}
				},
				{
					name: "Selectors",
					description: {
						text: "Learn about CSS selectors and how to effeciently target DOM elements.",
						links: [
							["MDN - CSS selectors", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors"],
							["MDN - All selectors", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"],
							["CSS Tricks - Child and Sibling Selectors", "https://css-tricks.com/child-and-sibling-selectors/"],
							["CSS Tricks - All Selectors", "https://css-tricks.com/almanac/selectors/"],
							["W3Schools - CSS Combinators", "https://www.w3schools.com/css/css_combinators.asp"]
						]
					},
					skills: [
						{
							name: "Specificity",
							description: {
								text: "Learn what specificity means and how to use it when writing CSS.",
								links: [
									["MDN - Specificity", "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"],
									["MDN - Cascade and inheritance", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"],
									["dev.to - CSS Specificity", "https://dev.to/emmawedekind/css-specificity-1kca"],
									["Specificity Calculator", "https://specificity.keegan.st/"],
									["W3Schools - CSS Specificity", "https://www.w3schools.com/css/css_specificity.asp"]
								]
							},
						},
						{
							name: "Pseudo Selectors",
							description: {
								text: "Learn how to use pseudo selectors.",
								links: [
									["MDN - Pseudo-classes", "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"],
									["CSS Tricks - Meet the Pseudo Class Selectors", "https://css-tricks.com/pseudo-class-selectors/"],
									["When do the :hover, :focus, and :active pseudo-classes apply?", "https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/"],
									["W3Schools - CSS Pseudo-elements", "https://www.w3schools.com/css/css_pseudo_elements.asp"],
									["W3Schools - CSS Pseudo-classes", "https://www.w3schools.com/css/css_pseudo_classes.asp"],
								]
							},
						},
					]
				},
				{
					name: "Box Model",
					description: {
						text: "Learn what the CSS box model means.",
						links: [
							["MDN - Introduction to the CSS basic box model", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"],
							["MDN - The box model", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"],
							["CSS Tricks - Inheriting box-sizing", "https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/"],
						]
					},
					skills: [
						{
							name: "Margin Collapsing",
							description: {
								text: "Learn about margin collapsing.",
								links: [
									["MDN - Mastering margin collapsing", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"],
									["Margin Collapse in CSS: What, Why, and How", "https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0"],
									["CSS Tricks - What You Should Know About Collapsing Margins", "https://css-tricks.com/what-you-should-know-about-collapsing-margins/"],
									["What's the Deal with Collapsible Margins?", "https://bitsofco.de/collapsible-margins/"],
									["What’s the Deal with Margin Collapse?", "https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/"],
								]
							},
						}
					]
				},
				/*{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["MDN - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
							["W3Schools - CSS Layout: Overflow", "https://www.w3schools.com/css/css_overflow.asp"],
							["Overflow In CSS", "https://ishadeed.com/article/overflow-css/"]
						]
					},
				},*/
				{
					name: "Colors",
					description: {
						text: "Learn the different ways you can define colors in CSS.",
						links: [
							["MDN - Color", "https://developer.mozilla.org/en-US/docs/Web/CSS/color"],
							["MDN - <color>", "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"],
							["W3Schools - CSS Colors", "https://www.w3schools.com/css/css_colors.asp"],
						]
					},
				},
				{
					name: "Calc",
					description: {
						text: "Learn how to use the CSS calc function.",
						links: [
							["MDN - Calc", "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"],
							["CSS Tricks - A Couple of Use Cases for Calc()", "https://css-tricks.com/a-couple-of-use-cases-for-calc/"],
						]
					},
				}
			]
		},
		{
			name: "junior",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of Javascript and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - Javascript First Steps", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"],
							["MDN - Javascript Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"],
							["MDN - Javascript Building Blocks", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks"],
							/* ["You might not need jQuery", "http://youmightnotneedjquery.com/"],*/
						]
					},
					skills: [
						{
							name: "Spread",
							description: {
								text: "Learn how the spread syntax can help you when working with arrays.",
								links: [
									["MDN - Spread syntax", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"],
									["Freecodecamp - An introduction to Spread syntax", "https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/"],
									["Object rest and spread properties", "https://v8.dev/features/object-rest-spread"],
								]
							},
						},
						{
							name: "Destructuring",
							description: {
								text: "Learn how destructuring can help you when working with objects.",
								links: [
									["MDN - Destructuring assignment", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"],
									["MDN - ES6 In Depth: Destructuring", "https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/"],
									["javascript.info - Destructuring assignment", "https://javascript.info/destructuring-assignment"],
								]
							},
						}
					]
				},
				{
					name: "DOM",
					description: {
						text: "Learn how the HTML is represented as objects that comprise the structure and content of a document.",
						links: [
							["MDN - DOM Introduction", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"],
							["Freecodecamp - What's the DOM", "https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/"],
							["Introduction to the DOM", "https://learn.co/lessons/introduction-to-the-dom"],
							["htmldom.dev", "https://htmldom.dev/"],
						]
					},
					skills: [
						{
							name: "DOM Manipulation",
							description: {
								text: "Learn how to query HTML elements through Javascript and manipulate them.",
								links: [
									["MDN - Locating DOM elements using selectors", "https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"],
									["Supercharged - querySelector", "https://www.youtube.com/watch?v=s0vg_H9hBuU"],
								]
							}
						},
					]
				},
				{
					name: "Events",
					description: {
						text: "Learn how to dispatch and listen for events.",
						links: [
							["MDN - Introduction to events", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"],
							["MDN - Creating and triggering events", "https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events"],
							["Event Bubbling and Event Capturing in JavaScript", "https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e"],
							["Freecodecamp - A simplified explanation of event propagation", "https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/"],
							["JavaScript Events Explained", "https://flaviocopes.com/javascript-events/"],
							["MDN - addEventListener()", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"],
							["MDN - removeEventListener(", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"],
							["Event order", "https://www.quirksmode.org/js/events_order.html"],
						]
					}
				}
			]
		},
		{
			name: "senior",
			skills: [
				{
					name: "Standardization",
					description: {
						text: "Learn why web standards are important and how new specifications are standardised.",
						links: [
							["Wikipedia - Web Standards", "https://en.wikipedia.org/wiki/Web_standards"],
							["What Are Web Standards?", "https://www.elcom.com.au/resources/blog/web-standards"],
							["A Comprehensive Explanation of Web Standards", "https://robertnyman.com/2007/05/21/what-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term/"],
						]
					},
					skills: [
						{
							name: "W3C",
							description: {
								text: "Learn what W3C are doing and how they are moving the web forward.",
								links: [
									["W3C - About", "https://www.w3.org/standards/about.html"],
									["W3C - Standards", "https://www.w3.org/standards/"],
									["W3C - Process", "http://webdiy.org/w3c/"],
									["Web Standards Guide", "https://www.smashingmagazine.com/2019/01/web-standards-guide/"],
									["W3C - Groups", "https://www.w3.org/community/groups/"],
									["The W3C At Twenty-Five", "https://www.smashingmagazine.com/2019/10/happy-birthday-w3c/"],
								]
							}
						},
						{
							name: "TC39",
							description: {
								text: "Learn what TC39 are doing and how they are moving the web forward.",
								links: [
									["The TC39 process for ECMAScript features", "https://2ality.com/2015/11/tc39-process.html"],
									["Github - TC39", "https://github.com/tc39"],
									["Ecma International - Programme of work", "https://www.ecma-international.org/memento/tc39.htm"],
									["Wikipedia - Ecma International", "https://en.wikipedia.org/wiki/Ecma_International"],
								]
							},
						},
						{
							name: "WHATWG",
							description: {
								text: "Learn what WHATWG are doing and how they are moving the web forward.",
								links: [
									["WHATWG - FAQ", "https://whatwg.org/faq"],
									["WHATWG - Standards", "https://spec.whatwg.org/"],
									["MDN - WHATWG", "https://developer.mozilla.org/en-US/docs/Glossary/WHATWG"],
									["W3C vs. WHATWG HTML5 Specs", "https://dzone.com/articles/w3c-vs-whatwg-html5-specs"],
									["WHATWG - HTML", "https://html.spec.whatwg.org/"],
									["Wikipedia - WHATWG", "https://en.wikipedia.org/wiki/WHATWG"],
								]
							}
						},
						{
							name: "Specifications",
							description: {
								text: "Learn how to read specifications developed by the standards committees.",
								links: [
									["How to Read the ECMAScript Specification", "https://timothygu.me/es-howto/"],
									["How to Read W3C Specs", "https://alistapart.com/article/readspec/"],
									["Learning CSS by reading specs", "https://www.chenhuijing.com/blog/learning-css-by-reading-specifications/"],
									["Understanding the CSS Specifications", "https://www.w3.org/Style/CSS/read.en.html"],
								]
							},
						}
					]
				},
				{
					name: "Browser Engines",
					description: {
						text: "Learn what a browser engine is and get an overview of the browser landscape and market share.",
						links: [
								["Medium - Browser Engines", "https://medium.com/@jonbiro/browser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968"],
								["Wikipedia - Comparison", "https://en.wikipedia.org/wiki/Comparison_of_browser_engines"],
								["HTML5 Rocks - How Browsers Work", "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/"],
								["Demystifying Browsers", "https://textslashplain.com/2020/02/09/demystifying-browsers/"],
						]
					},
					skills: [
						{
							name: "Webkit",
							description: {
								text: "Learn about the Webkit browser engine.",
								links: [
									["Webkit", "https://webkit.org/"]
								]
							}
						},
						{
							name: "Blink",
							description: {
								text: "Learn about the Blink browser engine.",
								links: [
									["Blink", "https://en.wikipedia.org/wiki/Blink_(browser_engine)"],
								]
							}
						},
						{
							name: "Gecko",
							description: {
								text: "Learn about the Gecko browser engine.",
								links: [
									["Gecko", "https://en.wikipedia.org/wiki/Gecko_(software)"]
								]
							}
						}
					]
				}
			]
		}
	]
}