<?php

namespace App\Repository;

use App\Entity\Coats;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Coats|null find($id, $lockMode = null, $lockVersion = null)
 * @method Coats|null findOneBy(array $criteria, array $orderBy = null)
 * @method Coats[]    findAll()
 * @method Coats[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CoatsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Coats::class);
    }

    // /**
    //  * @return Coats[] Returns an array of Coats objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Coats
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
