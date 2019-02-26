<?php

namespace App\EventListener;

use App\Entity\Photo;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;


class AddUrlPhotoAnimal
{
    private $helper;

    public function __construct(UploaderHelper $helper)
    {
        $this->helper = $helper;
    }
    // Juste après le persist() dans la méthode __invoke() de PhotoController etavant le flush()
    public function postPersist(LifecycleEventArgs $args)
    {
        // Je récupère l'entité.
        $entity = $args->getObject();
        // Je vérifie qu'il s'agit bien d'une instance de Photo si ce n'est pas le cas on ne fait rien on rend la main.
        if (!$entity instanceof Photo) {
            return;
        }
        // Si c'est bien une instance de Photo.
        // Je récupère l'url de l'image.
        $path = $this->helper->asset($entity, 'file');
        // Et je modifie la propriété contentUrl qui par défaut n'a que le nom unique du fichier.
        $entity->setContentUrl($path);
        // Le controller reprend la main et fait le flush().
    }
}
