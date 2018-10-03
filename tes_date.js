function tes_date()
{
    // The dates found in the game
    var months = ['Morning Star', 'Sun\'s Dawn', 'First Seed', 'Rain\'s Hand', 'Second Seed', 
                  'Mid Year', 'Sun\'s Height', 'Last Seed', 'Hearthfire', 'Frost Fall', 'Sun\'s Dusk', 
                  'Evening Star'];

    var week_days = ['Sundas', 'Morndas', 'Tirdas', 'Middas', 'Turdas', 'Fredas', 'Loredas'];

    // Get the normal days, months and years
    var d = new Date();
    var Week_Day = d.getDay();
    var Month = d.getMonth();
    var Day = d.getDate();

    // Let you to use the methods by just inserting in the HTML file, using the "id"
    day = document.getElementById('tes_date_day');
    week_Day = document.getElementById('tes_date_week_day');
    month = document.getElementById('tes_date_month');

    // Set the HTML variables from the JavaScript
    day.innerHTML = Day;
    week_Day.innerHTML = week_days[Week_Day];
    month.innerHTML = months[Month];
}
