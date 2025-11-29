// ========================================
// Recipe Modal & Data
// ========================================// Recipe Data
const recipes = {
    'perfect-brownie': {
        title: 'The Perfect Brownie',
        story: 'This recipe represents my journey from following instructions to true understanding. After countless failed batches, I learned that the crackly top comes from vigorously whisking eggs and sugar—creating air bubbles that rise during baking. The "why" behind using both butter and chocolate? Butter adds richness while chocolate provides intense flavor. Each failure taught me something: too much flour makes them cakey, overmixing develops gluten and makes them tough, and that perfect fudgy center requires trusting your instincts over the timer.',
        ingredients: [
            '1/2 cup (115g) unsalted butter',
            '8 oz (225g) dark chocolate (70% cacao), chopped',
            '3/4 cup (150g) granulated sugar',
            '1/4 cup (50g) light brown sugar',
            '3 large eggs, room temperature',
            '1 tsp vanilla extract',
            '1/3 cup (40g) all-purpose flour',
            '1/4 cup (25g) Dutch-process cocoa powder',
            '1/4 tsp salt',
            'Flaky sea salt for topping'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Line an 8x8" pan with parchment paper.',
            'Melt butter and chocolate together in a double boiler or microwave. Stir until smooth and let cool slightly.',
            'Whisk both sugars and eggs together vigorously for 2-3 minutes until pale, thick, and ribbony. This creates the crackly top!',
            'Fold in the chocolate mixture and vanilla until just combined.',
            'Sift together flour, cocoa powder, and salt. Gently fold into batter—don\'t overmix.',
            'Pour into prepared pan. Tap pan on counter to release air bubbles.',
            'Bake for 20-25 minutes (adjust for toaster oven if needed). Center should be just set but still slightly jiggly.',
            'Immediately sprinkle with flaky sea salt. Cool completely before cutting.',
            'Pro tip: For extra fudgy brownies, slightly underbake and refrigerate overnight before serving.'
        ]
    },
    'matcha-cookies': {
        title: 'Matcha White Chocolate Cookies',
        story: 'I discovered that chilling cookie dough isn\'t just a suggestion—it\'s the secret to preventing flat, greasy cookies. The "why"? Cold butter spreads slower in the oven, giving the cookies time to set before they spread too much. Matcha powder adds earthy complexity, but I learned the hard way that quality matters—cheap matcha tastes bitter. The white chocolate balances the matcha\'s slight bitterness with sweetness. This recipe taught me patience: better cookies come from dough that rests.',
        ingredients: [
            '2 cups all-purpose flour',
            '1 tbsp matcha powder (culinary grade)',
            '1/2 tsp baking soda',
            '1/2 tsp salt',
            '3/4 cup unsalted butter, melted',
            '1 cup brown sugar',
            '1/2 cup white sugar',
            '1 egg + 1 yolk',
            '2 tsp vanilla extract',
            '1 cup white chocolate chunks'
        ],
        instructions: [
            'Sift flour, matcha, baking soda, and salt together.',
            'Whisk melted butter and both sugars until smooth. Beat in egg, yolk, and vanilla.',
            'Fold in dry ingredients until just combined. Stir in white chocolate.',
            'Chill dough for 30 minutes (or up to 3 days for deeper flavor).',
            'Preheat oven to 325°F (165°C).',
            'Scoop dough into balls and place on lined baking sheet.',
            'Bake for 12-14 minutes until edges are set but centers still look soft.',
            'Cool on pan for 5 minutes before transferring to wire rack.'
        ]
    },
    'sourdough': {
        title: 'Classic Sourdough Bread',
        story: 'Sourdough taught me that baking is alive. My starter is like a pet—it needs feeding, attention, and time. I failed many loaves before understanding that the "autolyse" (resting flour and water) lets enzymes break down proteins naturally, developing gluten without kneading. The "why" behind stretch-and-folds instead of kneading? Gentle handling preserves the air bubbles created by fermentation. Cold-proofing overnight develops complex, tangy flavors that rushed bread never achieves. This bread taught me that the best things can\'t be hurried.',
        ingredients: [
            '500g bread flour',
            '350g water (warm, 80°F)',
            '100g active sourdough starter (fed and bubbly)',
            '10g salt'
        ],
        instructions: [
            'Mix flour and water (autolyse) for 1 hour. This develops gluten naturally.',
            'Add starter and salt. Mix until fully incorporated using wet hands.',
            'Perform 4 sets of stretch and folds every 30 mins over 2 hours.',
            'Bulk ferment for 4-6 hours at room temp until doubled in size.',
            'Shape into a boule or batard. Place in banneton seam-side up.',
            'Cold proof in refrigerator overnight (8-12 hours).',
            'Preheat dutch oven at 450°F (230°C) for 30 minutes.',
            'Score the dough and bake covered for 20 mins, then uncovered for 25 mins.',
            'Cool completely on wire rack before slicing (at least 1 hour).'
        ]
    },
    'strawberry-shortcake': {
        title: 'Strawberry Shortcake',
        story: 'The revelation here was understanding that shortcake isn\'t cake at all—it\'s a biscuit! The "why" behind using cold butter? It creates steam pockets as it melts, making flaky layers. I learned not to overwork the dough; gluten development makes biscuits tough instead of tender. Macerating the strawberries with sugar draws out their juices, creating a natural syrup. This recipe taught me that sometimes the simplest techniques—cold butter, gentle hands, fresh ingredients—create the most memorable results.',
        ingredients: [
            '2 cups all-purpose flour',
            '1/3 cup sugar',
            '1 tbsp baking powder',
            '1/2 tsp salt',
            '1/2 cup cold butter, cubed',
            '2/3 cup cold milk',
            '1 lb fresh strawberries, sliced',
            '1/4 cup sugar (for berries)',
            '2 cups heavy cream',
            '3 tbsp powdered sugar',
            '1 tsp vanilla extract'
        ],
        instructions: [
            'Mix dry ingredients. Cut in cold butter until mixture resembles coarse crumbs.',
            'Stir in milk to form a soft dough. Don\'t overmix.',
            'Pat dough to 3/4" thickness. Cut into rounds with biscuit cutter.',
            'Bake at 425°F (220°C) for 12-15 mins until golden.',
            'Meanwhile, toss sliced strawberries with sugar and let macerate for 30 mins.',
            'Whip cream with powdered sugar and vanilla until soft peaks form.',
            'Split warm biscuits, layer with berries and cream.',
            'Serve immediately for best texture.'
        ]
    },
    'lemon-tart': {
        title: 'Tangy Lemon Tart',
        story: 'This tart taught me about balance—the interplay between sweet and tart, rich and bright. The "why" behind blind-baking the crust? It prevents sogginess by creating a barrier before adding the wet filling. I learned that cooking the lemon curd in a double boiler prevents the eggs from scrambling—gentle, indirect heat is key. Fresh lemon juice makes all the difference; bottled juice tastes flat and artificial. The butter whisked in at the end adds silky richness. This recipe showed me that precision and patience create elegance.',
        ingredients: [
            'For crust: 1 1/4 cups flour, 1/2 cup butter (cold), 1/4 cup powdered sugar, 1 egg yolk',
            'For filling: 4 large eggs',
            '3/4 cup granulated sugar',
            '2/3 cup fresh lemon juice (about 4-5 lemons)',
            'Zest of 2 lemons',
            '1/2 cup heavy cream',
            '1/4 cup unsalted butter, cubed'
        ],
        instructions: [
            'Make crust: Pulse flour, butter, and sugar until crumbly. Add yolk and pulse until dough forms.',
            'Press into 9" tart pan. Chill for 30 minutes.',
            'Blind bake at 375°F (190°C) for 15 mins with pie weights, then 5 mins without.',
            'Make filling: Whisk eggs and sugar. Add lemon juice, zest, and cream.',
            'Cook in double boiler, stirring constantly, until thick (about 10 mins).',
            'Remove from heat and whisk in butter until smooth.',
            'Pour into baked crust. Refrigerate for at least 3 hours.',
            'Dust with powdered sugar before serving. Garnish with candied lemon slices if desired.'
        ]
    },
    'cinnamon-rolls': {
        title: 'Fluffy Cinnamon Rolls',
        story: 'Cinnamon rolls taught me about yeast—a living organism that needs warmth and time to work its magic. The "why" behind the double rise? The first develops flavor and structure; the second makes them light and fluffy. I learned that rolling the dough tightly (but not too tight!) creates those beautiful swirls. Room-temperature cream cheese makes frosting smooth and spreadable—cold cream cheese creates lumps. These rolls taught me that baking is about creating the right environment for transformation to happen.',
        ingredients: [
            'Dough: 3 1/2 cups flour, 1/4 cup sugar, 1 packet yeast, 1 cup warm milk, 1/4 cup butter, 1 egg, 1 tsp salt',
            'Filling: 1/2 cup butter (softened), 3/4 cup brown sugar, 2 tbsp cinnamon',
            'Frosting: 4 oz cream cheese, 1/4 cup butter, 1 cup powdered sugar, 1/2 tsp vanilla'
        ],
        instructions: [
            'Activate yeast in warm milk with 1 tsp sugar for 5 minutes.',
            'Mix flour, sugar, and salt. Add yeast mixture, melted butter, and egg. Knead for 8 mins.',
            'Let dough rise in warm place for 1 hour until doubled.',
            'Roll dough into 16x12" rectangle. Spread with softened butter.',
            'Mix brown sugar and cinnamon. Sprinkle evenly over butter.',
            'Roll tightly from long side. Cut into 12 rolls.',
            'Place in greased 9x13" pan. Let rise 30 minutes.',
            'Bake at 350°F (175°C) for 25-30 minutes until golden.',
            'Beat cream cheese frosting ingredients. Spread on warm rolls.',
            'Best served warm, but can be reheated the next day!'
        ]
    },
    'chocolate-chip': {
        title: 'Classic Chocolate Chip Cookies',
        story: 'The classic chocolate chip cookie taught me that small details matter enormously. The "why" behind using both white and brown sugar? White sugar creates crispy edges while brown sugar (which contains molasses) adds chewiness and depth. Room-temperature butter creams better with sugar, incorporating air for lighter cookies. I learned that slightly underbaking leaves centers gooey—they\'ll continue cooking on the hot pan. This recipe taught me that mastering the basics opens doors to endless variations.',
        ingredients: [
            '2 1/4 cups all-purpose flour',
            '1 tsp baking soda',
            '1 tsp salt',
            '1 cup (2 sticks) butter, softened',
            '3/4 cup granulated sugar',
            '3/4 cup packed brown sugar',
            '2 large eggs',
            '2 tsp vanilla extract',
            '2 cups chocolate chips'
        ],
        instructions: [
            'Preheat oven to 375°F (190°C).',
            'Mix flour, baking soda, and salt in a bowl.',
            'Beat butter and both sugars until creamy. Add eggs and vanilla.',
            'Gradually blend in flour mixture. Stir in chocolate chips.',
            'Drop rounded tablespoons onto ungreased cookie sheets.',
            'Bake for 9-11 minutes or until golden brown.',
            'Cool on baking sheet for 2 minutes, then transfer to wire rack.',
            'For extra gooey cookies, slightly underbake and let them finish setting on the pan.'
        ]
    },
    'banana-bread': {
        title: 'Moist Banana Bread',
        story: 'Banana bread taught me about resourcefulness—turning overripe bananas into something delicious. The "why" behind using very ripe bananas? They\'re sweeter and mash easily, adding moisture and intense banana flavor. I discovered that melted (not creamed) butter creates a denser, more tender crumb. The baking soda reacts with the bananas\' acidity to help the bread rise. This recipe showed me that "imperfect" ingredients often make the best results, and that waste can become wonderful.',
        ingredients: [
            '3-4 ripe bananas, mashed',
            '1/3 cup melted butter',
            '3/4 cup sugar',
            '1 egg, beaten',
            '1 tsp vanilla extract',
            '1 tsp baking soda',
            '1/4 tsp salt',
            '1 1/2 cups all-purpose flour',
            '1 tsp cinnamon (optional)',
            '1/2 cup chocolate chips (optional)'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease a 9x5\" loaf pan.',
            'In a mixing bowl, mash the ripe bananas with a fork.',
            'Mix in melted butter, then stir in sugar, egg, and vanilla.',
            'Sprinkle baking soda and salt over mixture. Stir in flour and cinnamon.',
            'Fold in chocolate chips if using.',
            'Pour batter into prepared loaf pan.',
            'Bake for 60-65 minutes, or until a toothpick comes out clean.',
            'Cool in pan for 10 minutes, then turn out onto wire rack.',
            'Best served warm with butter!'
        ]
    },
    'macarons': {
        title: 'French Macarons',
        story: 'Macarons humbled me. They failed spectacularly many times before I understood the science. The "why" behind aging egg whites? It reduces moisture for more stable meringue. Sifting almond flour twice removes lumps that would create bumpy shells. The "macaronage" (folding technique) is crucial—under-mix and they crack; over-mix and they spread flat. Letting them rest forms a skin that creates those signature "feet." These delicate cookies taught me that precision, patience, and practice turn failure into mastery.',
        ingredients: [
            '1 3/4 cups powdered sugar',
            '1 cup almond flour',
            '3 large egg whites, room temperature',
            '1/4 cup granulated sugar',
            'Food coloring (optional)',
            'Filling: buttercream, ganache, or jam'
        ],
        instructions: [
            'Sift powdered sugar and almond flour together twice. Set aside.',
            'Beat egg whites until foamy. Gradually add granulated sugar, beat to stiff peaks.',
            'Add food coloring if desired during the last minute of beating.',
            'Fold in almond flour mixture in three additions. Mix until batter flows like lava.',
            'Pipe 1.5\" circles onto parchment-lined baking sheets.',
            'Tap sheets firmly on counter to release air bubbles. Let sit 30-60 mins until tops are dry.',
            'Preheat oven to 300°F (150°C). Bake for 15-18 minutes.',
            'Cool completely before removing from parchment.',
            'Match shells by size and sandwich with your choice of filling.',
            'Refrigerate overnight for best flavor and texture.'
        ]
    },
    'blueberry-muffins': {
        title: 'Blueberry Muffins',
        story: 'Blueberry muffins taught me the importance of restraint. The "why" behind mixing until "just combined"? Overmixing develops gluten, creating tough, dense muffins with tunnels inside. I learned to fold in blueberries gently to avoid crushing them and turning the batter purple. The high initial oven temperature creates that beautiful domed top. Fresh blueberries burst with flavor, but frozen work too—don\'t thaw them or they\'ll bleed into the batter. This recipe taught me that knowing when to stop is as important as knowing what to do.',
        ingredients: [
            '2 cups all-purpose flour',
            '3/4 cup granulated sugar',
            '2 1/2 tsp baking powder',
            '1/2 tsp salt',
            '1 cup milk',
            '1/3 cup vegetable oil',
            '1 large egg',
            '1 tsp vanilla extract',
            '1 1/2 cups fresh blueberries',
            'Crumb topping: 1/4 cup flour, 1/4 cup sugar, 2 tbsp butter'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C). Line muffin tin with paper liners.',
            'Mix flour, sugar, baking powder, and salt in a large bowl.',
            'Whisk together milk, oil, egg, and vanilla in another bowl.',
            'Pour wet ingredients into dry ingredients. Stir until just combined.',
            'Gently fold in blueberries. Don\'t overmix.',
            'Make crumb topping by mixing flour, sugar, and cold butter until crumbly.',
            'Fill muffin cups 3/4 full. Sprinkle with crumb topping.',
            'Bake for 18-20 minutes until golden and toothpick comes out clean.',
            'Cool in pan for 5 minutes before transferring to wire rack.'
        ]
    },
    'red-velvet': {
        title: 'Red Velvet Cake',
        story: 'Red velvet taught me about chemistry and tradition. The "why" behind the red color? Originally, cocoa powder reacted with acidic buttermilk to create a reddish hue; now we enhance it with food coloring. The buttermilk\'s acidity tenderizes the crumb and reacts with baking soda for lift. I learned that this isn\'t a chocolate cake—the cocoa is subtle, letting the tangy cream cheese frosting shine. This cake taught me that some recipes are about honoring tradition while understanding the science behind it.',
        ingredients: [
            '2 1/2 cups all-purpose flour',
            '1 1/2 cups sugar',
            '1 tsp baking soda',
            '1 tsp cocoa powder',
            '1 tsp salt',
            '2 eggs',
            '1 1/2 cups vegetable oil',
            '1 cup buttermilk',
            '2 tbsp red food coloring',
            '1 tsp vanilla extract',
            'Frosting: 16 oz cream cheese, 1 cup butter, 4 cups powdered sugar, 2 tsp vanilla'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9" round pans.',
            'Sift together flour, sugar, baking soda, cocoa, and salt.',
            'Beat eggs, oil, buttermilk, food coloring, and vanilla until smooth.',
            'Gradually add dry ingredients to wet ingredients. Mix until just combined.',
            'Divide batter between prepared pans.',
            'Bake for 25-30 minutes until toothpick comes out clean.',
            'Cool in pans for 10 minutes, then turn out onto wire racks.',
            'For frosting: Beat cream cheese and butter until fluffy. Add powdered sugar and vanilla.',
            'Frost cooled cake layers. Refrigerate until serving.'
        ]
    },
    'pumpkin-pie': {
        title: 'Classic Pumpkin Pie',
        story: 'Pumpkin pie taught me about spice balance and custard science. The "why" behind the spice blend? Cinnamon, ginger, nutmeg, and cloves create warmth without overwhelming the pumpkin. I learned that evaporated milk (not condensed!) adds richness while the eggs set the custard. The two-temperature baking method—starting high, then reducing—sets the edges while keeping the center creamy. This pie taught me that holiday traditions are built on understanding ratios and respecting the delicate balance between structure and creaminess.',
        ingredients: [
            '1 unbaked 9" pie crust',
            '15 oz pumpkin puree (not pie filling)',
            '3/4 cup granulated sugar',
            '1 tsp ground cinnamon',
            '1/2 tsp ground ginger',
            '1/4 tsp ground nutmeg',
            '1/4 tsp ground cloves',
            '1/2 tsp salt',
            '3 large eggs',
            '12 oz evaporated milk'
        ],
        instructions: [
            'Preheat oven to 425°F (220°C).',
            'Mix pumpkin, sugar, cinnamon, ginger, nutmeg, cloves, and salt in large bowl.',
            'Beat in eggs until well combined.',
            'Gradually stir in evaporated milk.',
            'Pour into unbaked pie crust.',
            'Bake at 425°F for 15 minutes.',
            'Reduce temperature to 350°F (175°C). Bake for 40-50 minutes more.',
            'Pie is done when knife inserted near center comes out clean.',
            'Cool on wire rack for 2 hours. Serve with whipped cream.'
        ]
    },
    'croissants': {
        title: 'Buttery Croissants',
        story: 'Croissants are the ultimate test of patience and technique. The "why" behind lamination (folding butter into dough)? It creates hundreds of thin layers that puff up in the oven, becoming flaky and light. I failed many batches before learning that temperature is everything—too warm and the butter melts into the dough; too cold and it breaks. Each fold multiplies the layers exponentially. This recipe taught me that some achievements require dedication, precision, and the willingness to start over when things go wrong.',
        ingredients: [
            '4 cups all-purpose flour',
            '1/3 cup sugar',
            '1 tbsp salt',
            '1 tbsp instant yeast',
            '1 1/4 cups cold milk',
            '1 1/4 cups (2 1/2 sticks) cold butter',
            '1 egg + 1 tbsp water for egg wash'
        ],
        instructions: [
            'Mix flour, sugar, salt, and yeast. Add cold milk and mix into shaggy dough.',
            'Knead briefly, wrap, and refrigerate for 1 hour.',
            'Pound cold butter into 8x5" rectangle. Keep cold.',
            'Roll dough into 16x10" rectangle. Place butter in center, fold dough over.',
            'Roll out to 20x10". Fold into thirds (letter fold). Chill 30 minutes.',
            'Repeat rolling and folding two more times, chilling between each.',
            'Roll dough to 1/4" thickness. Cut into triangles.',
            'Roll each triangle from wide end to point. Curve into crescent shape.',
            'Let rise 2 hours until doubled. Brush with egg wash.',
            'Bake at 400°F (200°C) for 15-18 minutes until golden brown.'
        ]
    },
    'cheesecake': {
        title: 'New York Cheesecake',
        story: 'Cheesecake taught me about patience and gentle heat. The "why" behind the water bath? It provides humid, even heat that prevents cracks and ensures creamy texture. I learned that room-temperature cream cheese blends smoothly without lumps. Overmixing incorporates too much air, causing cracks; undermixing leaves lumps. The slow oven cool-down prevents thermal shock. Refrigerating overnight allows flavors to meld and texture to set perfectly. This recipe taught me that rushing creates flaws, while patience creates perfection.',
        ingredients: [
            'Crust: 1 1/2 cups graham cracker crumbs, 1/4 cup sugar, 6 tbsp melted butter',
            '32 oz cream cheese, softened',
            '1 1/4 cups sugar',
            '4 large eggs',
            '1/3 cup sour cream',
            '2 tsp vanilla extract',
            '1/4 cup all-purpose flour'
        ],
        instructions: [
            'Preheat oven to 325°F (165°C). Wrap outside of 9" springform pan with foil.',
            'Mix graham crumbs, sugar, and melted butter. Press into bottom of pan.',
            'Bake crust for 10 minutes. Cool.',
            'Beat cream cheese and sugar until smooth and fluffy (3-4 minutes).',
            'Add eggs one at a time, beating well after each.',
            'Mix in sour cream, vanilla, and flour until just combined.',
            'Pour over crust. Place springform in roasting pan. Add hot water to come halfway up sides.',
            'Bake for 60-70 minutes. Center should be slightly jiggly.',
            'Turn off oven, crack door, and let cool in oven for 1 hour.',
            'Refrigerate for at least 4 hours or overnight before serving.'
        ]
    },
    'apple-pie': {
        title: 'Classic Apple Pie',
        story: 'Apple pie taught me about apple varieties and their purpose. The "why" behind mixing Granny Smith and Honeycrisp? Granny Smith holds its shape and adds tartness; Honeycrisp adds sweetness and juiciness. I learned that tossing apples with flour absorbs excess liquid, preventing a soggy bottom crust. The high-then-low baking method cooks the apples through while achieving a golden crust. This all-American classic taught me that the best recipes often come from combining different elements to create something greater than the sum of its parts.',
        ingredients: [
            '2 pie crusts (homemade or store-bought)',
            '6-7 cups sliced apples (Granny Smith and Honeycrisp mix)',
            '3/4 cup granulated sugar',
            '2 tbsp all-purpose flour',
            '1 tsp ground cinnamon',
            '1/4 tsp ground nutmeg',
            '1/4 tsp salt',
            '2 tbsp butter',
            '1 egg + 1 tbsp water for egg wash',
            'Coarse sugar for sprinkling'
        ],
        instructions: [
            'Preheat oven to 425°F (220°C).',
            'Line 9" pie pan with bottom crust.',
            'Toss sliced apples with sugar, flour, cinnamon, nutmeg, and salt.',
            'Pile apple mixture into crust. Dot with butter.',
            'Cover with top crust. Trim, seal, and crimp edges.',
            'Cut slits in top for steam to escape.',
            'Brush with egg wash and sprinkle with coarse sugar.',
            'Bake for 20 minutes at 425°F.',
            'Reduce heat to 375°F (190°C) and bake 35-40 minutes more until golden.',
            'Cool on wire rack for at least 2 hours before slicing.'
        ]
    },
    'tiramisu': {
        title: 'Classic Tiramisu',
        story: 'Tiramisu taught me about the power of assembly. The "why" behind dipping ladyfingers quickly? They\'re sponges—too long and they disintegrate; too short and they\'re dry. I learned that tempering the egg yolks with sugar syrup (pâte à bombe) makes the mascarpone cream safe and silky smooth. The cocoa powder on top isn\'t just for looks; its bitterness cuts through the rich cream. This no-bake dessert taught me that you don\'t always need an oven to create a masterpiece.',
        ingredients: [
            '6 egg yolks',
            '3/4 cup granulated sugar',
            '2/3 cup milk',
            '1 1/4 cups heavy cream',
            '1/2 tsp vanilla extract',
            '1 lb mascarpone cheese, room temperature',
            '1/2 cup strong brewed coffee, room temperature',
            '2 tbsp rum (optional)',
            '2 packages ladyfingers',
            '1 tbsp unsweetened cocoa powder'
        ],
        instructions: [
            'Whisk egg yolks and sugar in a bowl over simmering water (double boiler) for about 10 mins until pale and thick. Remove from heat.',
            'Whisk in milk and cook stirring constantly until mixture coats the back of a spoon. Cover and refrigerate 1 hour.',
            'Beat mascarpone until smooth. Fold into chilled egg mixture.',
            'Whip heavy cream with vanilla to stiff peaks. Fold into mascarpone mixture.',
            'Mix coffee and rum in a shallow dish. Dip ladyfingers briefly (1 second per side).',
            'Layer dipped ladyfingers in bottom of 9x13" dish. Spread half of cream mixture over top.',
            'Repeat with another layer of ladyfingers and remaining cream.',
            'Cover and refrigerate for at least 4 hours, preferably overnight.',
            'Dust generously with cocoa powder before serving.'
        ]
    },
    'focaccia': {
        title: 'Rosemary Focaccia',
        story: 'Focaccia taught me to be aggressive with my dough. The "why" behind the dimpling? Pushing your fingers deep into the dough creates pockets for olive oil and brine to pool, ensuring every bite is flavorful and moist. I learned that a high-hydration dough (lots of water!) creates those big, airy bubbles. Generous olive oil on the pan fries the bottom crust to a golden crunch. This bread taught me that sometimes, the best technique is to get your hands messy and have fun.',
        ingredients: [
            '4 cups bread flour',
            '2 tsp kosher salt',
            '2 1/4 tsp instant yeast',
            '2 cups warm water',
            '1 tsp sugar',
            '1/4 cup extra virgin olive oil (plus more for drizzling)',
            '2 tbsp fresh rosemary, chopped',
            'Flaky sea salt'
        ],
        instructions: [
            'Whisk flour, salt, and yeast in a large bowl. Add warm water and sugar.',
            'Mix with a spatula until a sticky dough forms. Cover and refrigerate for 12-18 hours (or rise at room temp for 4 hours).',
            'Pour 2 tbsp olive oil into a 9x13" baking pan. Transfer dough to pan, turning to coat in oil.',
            'Let rise uncovered in a warm spot for 2-4 hours until it fills the pan.',
            'Preheat oven to 425°F (220°C).',
            'Drizzle dough with 2 tbsp olive oil. Use fingers to dimple the dough deeply all over.',
            'Sprinkle with rosemary and flaky sea salt.',
            'Bake for 25-30 minutes until golden brown and crisp.',
            'Cool in pan for 10 minutes, then transfer to wire rack.'
        ]
    },
    'carrot-cake': {
        title: 'Spiced Carrot Cake',
        story: 'Carrot cake taught me that vegetables belong in dessert. The "why" behind grating carrots fresh? Pre-shredded carrots are dry; fresh ones release moisture during baking, keeping the cake tender for days. I learned that oil (instead of butter) keeps the crumb moist even when chilled. The spices—cinnamon, nutmeg, ginger—bloom in the fat, intensifying their flavor. This cake taught me that true comfort food often comes from humble ingredients transformed by spice and sweetness.',
        ingredients: [
            '2 cups all-purpose flour',
            '2 tsp baking soda',
            '1/2 tsp salt',
            '1 1/2 tsp ground cinnamon',
            '1 1/4 cups canola oil',
            '1 cup sugar',
            '1 cup brown sugar',
            '1 tsp vanilla extract',
            '4 large eggs',
            '3 cups grated peeled carrots (5-6 medium carrots)',
            '1 cup chopped pecans (optional)',
            'Frosting: 8 oz cream cheese, 1/2 cup butter, 3 cups powdered sugar'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease two 9" round pans.',
            'Whisk flour, baking soda, salt, and cinnamon in a bowl.',
            'In a separate bowl, whisk oil, sugars, and vanilla. Add eggs one at a time.',
            'Stir dry ingredients into wet ingredients until just combined.',
            'Fold in carrots and pecans.',
            'Divide batter between pans. Bake for 35-45 minutes until toothpick comes out clean.',
            'Cool in pans for 15 minutes, then turn out onto racks to cool completely.',
            'Beat cream cheese and butter until smooth. Add powdered sugar and beat until creamy.',
            'Frost cooled cake. Decorate with extra pecans if desired.'
        ]
    }
};

// Expose to window for onclick handlers
window.openRecipe = function(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) {
        console.error('Recipe not found:', recipeId);
        return;
    }

    const modal = document.getElementById('recipe-modal');
    const modalBody = document.getElementById('modal-body');

    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }

    modalBody.innerHTML = `
        <div class="modal-recipe-header">
            <h2>${recipe.title}</h2>
            ${recipe.story ? `<p class="recipe-story">${recipe.story}</p>` : ''}
        </div>
        <div class="modal-recipe-grid">
            <div class="recipe-section">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-section">
                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

window.closeRecipe = function() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target == modal) {
        window.closeRecipe();
    }
};

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function initAnimations() {
    const elements = document.querySelectorAll('.glass-panel, .section-title, .hero-content > *');
    
    elements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        observer.observe(el);
    });
}

// ========================================
// Smooth Scroll & Active Nav
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// Navigation Logic
// ========================================
function initNavigation() {
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.nav-dropdown');
    
    if (hamburger && dropdown) {
        // Toggle menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
            
            // Update icon
            const icon = hamburger.querySelector('i');
            if (dropdown.classList.contains('active')) {
                icon.classList.remove('ri-menu-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            }
        });

        // Close when clicking a link
        dropdown.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                dropdown.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
                dropdown.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            }
        });
    }
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initSmoothScroll();
    initNavigation();
    
    console.log('%c Katelyn\'s Kitchen ', 'background: #c9a882; color: white; padding: 4px; border-radius: 4px;');
});
