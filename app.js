// Define the main AngularJS app module
var app = angular.module('sportWaveApp', []);

// Main controller for product management (Shop Page)
app.controller('mainController', function($scope) {
    $scope.products = [
        {
            name: 'Soccer Ball',
            description: 'High-quality soccer ball for training and match play.',
            price: 25,
            image: 'image/soccerball.jpeg'
        },
        
        {
            name: 'Tennis Racket',
            description: 'Lightweight racket for perfect swings.',
            price: 100,
            image: 'image/tennisracket.png'
        },
        {
            name: 'Basketball',
            description: 'Official size and weight basketball for professional games.',
            price: 30,
            image: 'image/basketball.jpeg'
        },
        {
            name: 'Skateboard',
            description: 'High-durability skateboard for street and park skating.',
            price: 45,
            image: 'image/skateboard.jpeg'
        },
        {
            name: 'Fishing Rod',
            description: 'Lightweight and flexible fishing rod for freshwater fishing.',
            price: 60,
            image: 'image/fishingroa.jpeg'
        },
        {
            name: 'Bowling Ball',
            description: 'Custom-weight bowling ball for precision strikes.',
            price: 100,
            image: 'image/bowlingball.jpeg'
        },
        {
            name: 'Kayak',
            description: 'Single-person kayak designed for river adventures.',
            price: 400,
            image: 'image/kayak.jpeg'
        },
        {
            name: 'Punching Bag',
            description: 'Heavy-duty punching bag for endurance and power training.',
            price: 150,
            image: 'image/punchingbag.jpeg'
        },
        {
            name: 'Elliptical Machine',
            description: 'Low-impact elliptical machine for full-body cardio workouts.',
            price: 600,
            image: 'image/ellipthicalmachine.jpeg'
        },
        {
            name: 'Rock Climbing Shoes',
            description: 'Grip-enhancing shoes for rock climbing and bouldering.',
            price: 70,
            image: 'image/climbingshoes.jpeg'
        },
        {
            name: 'Frisbee',
            description: 'Aerodynamic frisbee for casual and competitive play.',
            price: 12,
            image: 'image/firsbee.jpeg'
        },
        {
            name: 'Snowboard',
            description: 'Premium snowboard for freestyle and downhill performance.',
            price: 350,
            image: 'image/snowboard.jpeg'
        },
        {
            name: 'Horse Riding Helmet',
            description: 'Protective helmet designed for horse riding and equestrian activities.',
            price: 80,
            image: 'image/ridinghelmet.jpeg'
        },
        {
            name: 'Running Shoes',
            description: 'Comfortable and durable shoes for long-distance running.',
            price: 75,
            image: 'image/runningshoes.jpeg'
        },
        {
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat for your fitness routines.',
            price: 20,
            image: 'image/yogamat.jpeg'
        },
        {
            name: 'Baseball Glove',
            description: 'Premium leather glove for professional baseball players.',
            price: 50,
            image: 'image/baseballgolves.jpeg'
        },
        {
            name: 'Golf Club Set',
            description: 'Complete set of golf clubs for beginners and professionals.',
            price: 250,
            image: 'image/goldclubset.jpeg'
        },
        {
            name: 'Boxing Gloves',
            description: 'Lightweight boxing gloves for training and sparring.',
            price: 60,
            image: 'image/boxinggloves.jpeg'
        },
        {
            name: 'Cycling Helmet',
            description: 'Protective helmet with ventilation for road cycling.',
            price: 40,
            image: 'image/cyclinghelmet.jpeg'
        },
        {
            name: 'Surfboard',
            description: 'High-performance surfboard designed for big waves.',
            price: 300,
            image: 'image/surfboard.jpeg'
        },
        {
            name: 'Dumbbell Set',
            description: 'Adjustable dumbbell set for strength training at home.',
            price: 80,
            image: 'image/dumbbleset.jpeg'
        },
        {
            name: 'Treadmill',
            description: 'Compact treadmill for indoor cardio workouts.',
            price: 500,
            image: 'image/tredmill.jpeg'
        },
        {
            name: 'Cricket Bat',
            description: 'Lightweight cricket bat for professional games.',
            price: 90,
            image: 'image/cricketbat.jpeg'
        },
        {
            name: 'Swimming Goggles',
            description: 'Anti-fog swimming goggles with UV protection.',
            price: 15,
            image: 'image/swimminggoggles.jpeg'
        },
        {
            name: 'Badminton Racket',
            description: 'Durable and lightweight racket for recreational badminton.',
            price: 35,
            image: 'image/badmintonracket.jpeg'
        },
        {
            name: 'Volleyball',
            description: 'Official size and weight volleyball for indoor and beach games.',
            price: 22,
            image: 'image/volleyball.jpeg'
        },
        {
            name: 'Ski Poles',
            description: 'Lightweight ski poles for downhill skiing.',
            price: 45,
            image: 'image/skipole.jpeg'
        },
        {
            name: 'Hiking Backpack',
            description: 'Spacious and waterproof backpack for long hikes.',
            price: 85,
            image: 'image/hikingbagpack.jpeg'
        },
    ];

    // Load cart from localStorage to maintain state between pages
    $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add products to cart
    $scope.addToCart = function(product) {
        let found = false;
        $scope.cart.forEach(item => {
            if (item.name === product.name) {
                item.quantity++;
                found = true;
            }
        });

        if (!found) {
            $scope.cart.push({ ...product, quantity: 1 });
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify($scope.cart));
        alert(product.name + ' has been added to the cart!');
    };
});

// Cart controller for managing cart-related actions (Cart Page)
app.controller('cartController', function($scope) {
    // Load cart from localStorage to maintain state between pages
    $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to remove items from the cart
    $scope.removeFromCart = function(item) {
        const index = $scope.cart.indexOf(item);
        if (index > -1) {
            $scope.cart.splice(index, 1);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify($scope.cart));
    };

    // Function to calculate the total price of the items in the cart
    $scope.getTotal = function() {
        return $scope.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Function to handle checkout and clear the cart
    $scope.checkout = function() {
        if ($scope.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        alert('Checkout successful! Your total is $' + $scope.getTotal());
        $scope.cart = [];
        
        // Clear the cart in localStorage after checkout
        localStorage.setItem('cart', JSON.stringify($scope.cart));
    };
});
