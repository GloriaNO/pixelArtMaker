// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height,width,color;

$('#sizePicker').submit(function(event){
event.preventDefault();
 height=$('#inputHeight').val();
 width=$('#inputWeight').val();
makeGrid(height, width);
});
function makeGrid() {

$('tr').remove();
for (let row=0;row<height;row++){
	$('#pixelCanvas').append('<tr id=table' + row +'></tr>');
	for (let cell=0; cell<width; cell++){
		$('#table' +row).append('<td></td>');
		
	}
}
$('td').click(function addColor(){
	color =$('#colorPicker').val();
	
	if($(this).attr('style')){
	$(this).removeAttr('style')
	}
	else{
		$(this).attr('style','background-color:' + color);
	}
	});
}




