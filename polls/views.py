from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views import generic

from .models import Question, Choice

class IndexView(generic.ListView):
  template_name = 'polls/index.html'
  context_object_name = 'latest_question_list'

  def get_queryset(self):
    return Question.objects.order_by('-pub_date')[:5]

class DetailView(generic.DetailView):
  model = Question
  template_name = 'polls/detail.html'

class ResultsView(generic.DetailView):
  model = Question
  template_name = 'polls/results.html'

'''
  The only view from the next that is used is vote(), the other
  are remplaced by above classes...
'''
def index(request):
  latest_question_list = Question.objects.order_by('-pub_date')[:5]
  context = {'latest_question_list': latest_question_list}
  return render(request, 'polls/index.html', context)

  """
  latest_question_list = Question.objects.order_by('-pub_date')[:5]
  template = loader.get_template('polls/index.html')
  context = {
      'latest_question_list': latest_question_list, 
  }
  return HttpResponse(template.render(context, request))
  """ 
  """ 
  response = HttpResponse()
  latest_question_list = Question.objects.order_by('-pub_date')[:5] 
  # output = ', '.join([q.question_text for q in latest_question_list])
  response.write("<body>")
  for q in latest_question_list:
    response.write("<pre> question: %s </pre>" % q.question_text)
  response.write("</body>")
  return response
  """

def detail(request, question_id):
  question = get_object_or_404(Question, pk=question_id)
  return render(request, 'polls/detail.html', {'question': question})
  '''
  try: 
    question = Question.objects.get(pk=question_id)
  except Question.DoesNotExist:
    raise Http404("Question does not exist.")
  return render(request, 'polls/detail.html', {'question': question})
  '''
  '''
    return HttpResponse("You're looking at question %s" % question_id)
  '''

def results(request, question_id):
  # response = "You're looking at the results of question %s."
  question = get_object_or_404(Question, pk=question_id)
  context = {'question': question}
  return render(request, 'polls/results.html', context)

def vote(request, question_id):
  question = get_object_or_404(Question, pk=question_id)
  try:
    selected_choice = question.choice_set.get(pk=request.POST['choice'])  
  except (KeyError, Choice.DoesNotExist):
    # Redisplay the question voting form
    return render(request, 'polls/detail.html', {
      'question': question,
      'error_message': "You didn't selected a choice.",
    })
  else:
    selected_choice.votes += 1
    selected_choice.save()
    # Always return a HttpResponseRedirect after successfully dealing
    # with post data. This prevents data from being posted twice if a 
    # user hits the back button.
    return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))


  '''
  return HttpResponse("You're voting on question %s" % question_id)
  '''
