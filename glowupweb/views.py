from django.shortcuts import render
from datetime import datetime

# Get the current day of the week in lowercase, e.g., 'monday'
today = datetime.now().strftime('%A').lower()


# Home page view
def index(request):
    # Render the main index.html template with the page title and today's day
    return render(request, 'index.html', {
        'title': "Glow up",
        'today': today,
    })


# Nightclubs page view
def nightclubs(request):
    # Render nightclubs.html with a title
    return render(request, 'nightclubs.html', {
        'title': 'Nightclubs',
    })


# View for a specific day
def date(request, day):
    # Convert day to lowercase (just to be safe)
    day.lower()

    # Render the date.html template with a title including the day
    return render(request, 'date.html', {
        'title': f'EVENTS ON {day.upper()}S',
        'day': day
    })


# Contact page view
def contact(request):
    # Render contact.html with a title
    return render(request, 'contact.html', {
        'title': 'Contact us',
    })


# Photos page view
def photos(request):
    # Render photos.html with a title
    return render(request, 'photos.html', {
        'title': 'Photos',
    })


# Pacha nightclub page
def pacha(request):
    # Dictionary mapping each day to its events
    parties = {
        'monday': 'VIBRA @ Main Room\nReggaeton | Afrobeat | Hip-Hop | R&B',
        'tuesday': 'FLIRT TUESDAY @ Main Room\nHip Hop | Reggaeton | Afrobeat | R&B',
        'wednesday': 'FULL PARTY @ Main Room\nHip Hop | Reggaeton | Afrobeat | R&B',
        'thursday': 'BAE @ Main Room\nReggaeton | Trap | Top Hits | Hip Hop',
        'friday': '''MOULAGA @ Main Room\nTop Hits | Reggaeton | R&B\n
                    EROS @ Red Room\nTechno | Tech House''',
        'saturday': '''PEGAO @ Main Room\nR&B | Hip Hop | Afrobeat | Reggaeton\n
                      SINNER @ Red Room\nTechno | Tech House''',
        'sunday': '''SIGHT @ Main Room\nTechno | Tech House | House\n
                     D’LOCOS @ Red Room\nReggaeton | Hits'''
    }

    # Get the party for today or default message if none
    party_today = parties.get(today, "There are no events scheduled for today")

    # Render the Pacha template with the title and today's party
    return render(request, 'discos/pacha.html', {
        'title': 'Pacha',
        'party_today': party_today,
    })


# Otto nightclub page
def otto(request):
    # Dictionary of events by day
    parties = {
        'thursday': 'PURO PERREO\nReggaeton | Trap | Dembow',
        'friday': 'BLACK DRAGON\nHip Hop | Open format | Hits',
        'saturday': 'PURE SHÔKO\nDJ PAPIS - DJ OUMAR',
    }

    # Get today's events or a default message
    party_today = parties.get(today, "There are no events scheduled for today")

    # Render the Otto template
    return render(request, 'discos/otto.html', {
        'title': 'Otto',
        'party_today': party_today,
    })


# Opium nightclub page
def opium(request):
    parties = {
        'monday': 'BLACKOUT MONDAYS\nEDM | House',
        'tuesday': 'LADIES NIGHT\nTop Hits | Reggaeton',
        'wednesday': 'EUPHORIA\nLatin | Reggaeton',
        'thursday': 'JET LAG\nTop Hits',
        'friday': 'ADDICTED\nTop Hits',
        'saturday': 'JUST OPIUM\nTop Hits',
        'sunday': 'MANDRAKE\nTop Hits | Reggaeton',
    }

    party_today = parties.get(today, "There are no events scheduled for today")

    return render(request, 'discos/opium.html', {
        'title': 'Opium',
        'party_today': party_today,
    })


# Downtown nightclub page
def downtown(request):
    parties = {
        'thursday': 'Thursdays Downtown\nTop Hits | Reggaeton',
        'friday': 'Fridays Downtown\nTop Hits | Reggaeton',
        'saturday': 'Saturdays Downtown\nTop Hits | Reggaeton',
    }

    party_today = parties.get(today, "There are no events scheduled for today")

    return render(request, 'discos/downtown.html', {
        'title': 'Downtown',
        'party_today': party_today,
    })


# La Biblio nightclub page
def biblio(request):
    parties = {
        'thursday': 'Thursdays La Biblio\nTop Hits | Reggaeton',
        'friday': 'Thursdays La Biblio\nTop Hits | Reggaeton',
        'saturday': 'Thursdays La Biblio\nTop Hits | Reggaeton',
    }

    party_today = parties.get(today, "There are no events scheduled for today")

    return render(request, 'discos/biblio.html', {
        'title': 'La Biblio',
        'party_today': party_today,
    })


# Cookies policy page
def cookies(request):
    # Simply render the cookies.html template (no additional context)
    return render(request, 'cookies.html')