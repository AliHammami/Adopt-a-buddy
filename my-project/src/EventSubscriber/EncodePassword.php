<?php

namespace App\EventSubscriber;

use App\Entity\User;
use App\Entity\Association;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\Annotation\Route;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;

final class EncodePassword implements EventSubscriberInterface
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    // Inscription à l'événement POST_WRITE (dès qu'il y a un persist au niveau de la base de donnée)
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['encode', EventPriorities::PRE_WRITE],
        ];
    }
    // Méthode appelée lorsque l'événement est déclenché.
    // Bien passer en paramètre un objet de type GetResponseForControllerResultEvent afin de pouvoir récupérer toutes les infos.
    public function encode(GetResponseForControllerResultEvent $event)
    {
        // On récupère une instance de l'objet qui va être persisté.
        $entity = $event->getControllerResult();

        // Si ce n'est pas une instance de l'objet User ou Association
        if (!$entity instanceof User && !$entity instanceof Association) {
            return;
        }
        // On encode la mot  de passe.
        if($entity->getPlainPassword() != null){
            $entity->setPassword($this->passwordEncoder->encodePassword($entity, $entity->getPlainPassword()));
        }
        

    }
}
