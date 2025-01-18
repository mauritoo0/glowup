from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html', {
    'title': "Marshall's",   
    })
   
   
def nightclubs(request):
    return render(request, 'nightclubs.html', {
    'title': 'Nightclubs',   
    })
    
      
def dates(request):
    return render(request, 'dates.html', {
    'title': 'Dates',   
    })
    

def imagen(request):
    return render(request, 'imagen.html', {
    'title': 'Imagen',   
    })


def photos(request):
    return render(request, 'photos.html', {
    'title': 'Photos',   
    })
