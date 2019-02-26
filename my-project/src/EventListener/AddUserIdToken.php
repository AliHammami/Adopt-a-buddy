<?php

namespace App\EventListener;

use App\Entity\User;
use App\Entity\Association;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AddUserIdToken
{
    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $entity = $event->getUser();

        if (!$entity instanceof User && !$entity instanceof Association) {
            return;
        }
        if($entity instanceof User){
            $data['data'] = array(
                'id'        => $entity->getId(),
                'firstname'  => $entity->getFirstname(),
                'lastname'  => $entity->getLastname(),
            );
        } else{
            $data['data'] = array(
                'id'        => $entity->getId(),
                'name'  => $entity->getname(),
				'idAddress' => $entity->getAddress()->getId(),
            );
			
        }

        $event->setData($data);
    } 
}
