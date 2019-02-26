<?php

namespace App\EventSubscriber;;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\Annotation\Route;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;

final class MailController implements EventSubscriberInterface
{
    private $mailer;
    private $serializer;

    public function __construct(\Swift_Mailer $mailer, SerializerInterface $serializer)
    {
        $this->mailer = $mailer;
    }

    // Inscription à l'événement POST_WRITE (dès qu'il y a un persist au niveau de la base de donnée)
    public static function getSubscribedEvents()
    {
        return [
            // Attention ici il faut bien mettre le nom de la méthode qui va être appelée : registerEmail suite au déclenchement de l'événement.
            KernelEvents::VIEW => ['registerEmail', EventPriorities::POST_WRITE],
        ];
    }
    // Méthode appelée lorsque l'événement est déclenché.
    // Bien passer en paramètre un objet de type GetResponseForControllerResultEvent afin de pouvoir récupérer toutes les infos.
    public function registerEmail(GetResponseForControllerResultEvent $event)
    {
        // On récupère une instance de User.
        $user = $event->getControllerResult();
        // On récupère la méthode de la requête.
        $method = $event->getRequest()->getMethod();
        // Si l'instance n'est pas de type User ou la méthode n'est pas type POST, on ne fait rien la requête poursuit son chemin normal.
        // On ne va pas plus loin.
        if (!$user instanceof User || Request::METHOD_POST !== $method) {
            return;
        }
        // On a bien une instance de User et la méthode est de type POST.
        // On récupère les infos.
        $name = $user->getLastname();
        $firstname = $user->getFirstname();
        $email = $user->getEmail();

        // Faire le message.
        $message = (new \Swift_Message('Hello Email'))
        ->setSubject('Nouvelle inscription')
        ->setFrom('michael.fraix@gmail.com')
        ->setTo('triguero.frederic@gmail.com')
        ->setBody('Salut Fred, ' . $name . ' ' . $firstname . ' Avec l\'email: ' . $email . ' vient de s\'inscrire !');
        // Envoyer le mail.
        $this->mailer->send($message);
    }
}
