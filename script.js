//your JS code here. If required.
document.addEventListener("DOMContenetLoaded",() =>{

const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) =>
	{
		code.addEventListener("keydown", (e) =>
			{
				if(target.value.length > 0 && idx < codes.length - 1)
				{
					codes[idx + 1].focus();
				}
			});
		code.addEventListener("keydown", (e) =>
			{
				if(e.key == "Backspace" && idx > 0)
				{
					codes[idx - 1].focus;
				}
			});
		});
	
	});





