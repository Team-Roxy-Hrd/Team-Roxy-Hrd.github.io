

function okay(films){
    if(confirm("Do you want to watch the film?")){
        window.open("show-1.html","_blank","","");
    }
    else{
        console.log("Select a film");
    }
}
function film(){
    if(confirm("Do you want to watch the film?")){
        window.open("show-1.html","_blank","","");
    }
    else{
        console.log("Select a film");
    }
}
let availableKeywords=[
    'Ghapy Mno Fih',
    'Ahmed Notridam',
    'ُEl Badla',
    'Underdoggs',
    'Asal Eswd',
    'Ricky Stanicky',
    'Unfrosted',
    'The Fall Guy',
    'Operation Fortune',
    'The Family Plan',
    'Robots',
    'Chicken Run',
    'Tasleem Ahaly',
    'Fadel W Neama',
    'El Bayt Bayty',
    'For Zeko',
    'Mama Hamel',
    'Barra El Manhag',
    'Marry Me Again',
    'One Second'

];

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultBox.innerHTML ="<a onclick='film();'style='display:inline-block;'><ul style='list-style-type:none;text-align:center;display:block;'>"+content.join('')+"</ul></a>";
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    resultBox.innerHTML='';
}

