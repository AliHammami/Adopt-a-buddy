<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;
use Faker\Factory;
use Faker\ORM\Doctrine\Populator;
use Faker\Provider\Lorem;
use App\Entity\Role;
use App\Entity\User;
use App\Entity\Commentary;
use App\Entity\Address;
use App\Entity\Association;
use App\Entity\Animal;
use App\Entity\Status;
use App\Entity\Photo;
use App\Entity\Sex;
use App\Entity\Size;
use App\Entity\Colors;
use App\Entity\Coats;
use App\Entity\Species;
use App\Entity\Races;
use Faker\Provider\DateTime;
use Faker\Provider\Barcorde;
use Faker\Provider\PhoneNumber;
use Faker\Provider\Color;
class Animals extends Fixture 
{
    public function load(ObjectManager $manager)
    {
        $specie = new Species();
        $specie->setName('Chien');
        $manager->persist($specie);
        $manager->flush();
        $specie = new Species();
        $specie->setName('Chat');
        $manager->persist($specie);
        $manager->flush();
        
        /*$insertedElements = $populator->execute();
        $raceCat = $insertedElements['Ap\Entity\Races'];
        $raceDog = $insertedElements['Ap\Entity\Races'];*/
        //create Roles
        $admins = new Role();
        $admins -> setName('ADMIN');
        $admins -> setCode('ROLE_Admin');
        $manager->persist($admins);
        $adoptant = new Role();
        $adoptant-> setName('ADOPTANT');
        $adoptant-> setCode('ROLE_ADOPTANT');
        $manager->persist($adoptant);
        
        $user = new Role();
        $user-> setName('USER');
        $user-> setCode('ROLE_USER');
        $manager->persist($user);
        
        $manager->flush();
        
        
        $faker = Faker\Factory::create();

        for($u = 0; $u <= 10; $u++) {
            for($animals = 0; $animals < mt_rand(0,10); $animals++){
                $st = mt_rand(0,2);
                $specie = mt_rand(0,1);
                $coats = new Coats();
                $coats-> setName('Coats');
                $manager->persist($coats);
                if($specie == 0){
                    $species = new Species();
                    $species->setName('Chat');
                    $manager->persist($species);
                }else{
                    $species = new Species();
                    $species->setName('Chien');
                    $manager->persist($species);
                }
                    if($st == 0){
                        $status = new Status();
                        $status-> setName('Pending');
                        $manager->persist($status);
                    }elseif ($st == 1){
                        $status = new Status();
                        $status-> setName('decline');
                        $manager->persist($status);
                    }else{
                        $status = new Status();
                        $status-> setName('adopted');
                        $manager->persist($status);
                    
                    $race = new Races();
                    $race->setName($faker->sentence($nbWords = 1, $variableNbWords = true));
                    $race->setTemperament($faker->sentence($nbWords = 1, $variableNbWords = true));
                    $race->setSpecies($species);
                    $manager->persist($race);
                    $size = new Size();
                    $size-> setName($faker->numberBetween($min = 50, $max = 150));
                    $manager->persist($size);
                    $colors = new Colors();
                    $colors->setName($faker->safeColorName());
                    $manager->persist($colors);
                    $animal = new Animal();
                    $animal-> setName($faker->unique()->lastName());
                    $animal-> setAge($faker->numberBetween($min = 1, $max = 10));
                    $animal->setDescription($faker->sentence($nbWords = 15, $variableNbWords = true));
                    $animal->setCoats($coats);
                    $animal-> setColor($colors);
                    $animal-> setRace($race);
                    $animal-> setSize($size);
                    $animal-> setStatus($status);
                    $sexs= mt_rand(0,1);
                    if($sexs == 0){
                        $sex = new Sex();
                        $sex-> setName('Male');
                        $animal-> setSex($sex);
                        $manager->persist($sex);
                    }else{
                        $sex = new Sex();
                        $sex-> setName('Female');
                        $animal-> setSex($sex);
                        $manager->persist($sex);
                    }
                    $animal->setCreatedAt($faker->dateTimeThisYear($max = 'now', $timezone = null));
                    $photo = new Photo();
                    $photo->setContentUrl($faker->image($dir = '/tmp', $width = 640, $height = 480));
                    $photo->setAnimal($animal);
                    $manager->persist($photo);
                
            $adress = new Address;
            $adress->setLine1($faker->unique()->streetAddress());
            $adress->setCp($faker->unique()->postcode());
            $adress->setCity($faker->unique()->city());
            $manager->persist($adress);
            //Create 10 users
            $users = new User();
            $users->setFirstname($faker->unique()->lastName());;
            $users->setLastname($faker->unique()->firstName());
            $users->setEmail($faker->email());
            $users->setAddress($adress);
            $users->setPassword('user');
            //$users->setRoles($user);
            $users->setPicture('http://url.com');
            $manager->persist($users);
            $association = new Association();
            $association-> setName($faker->sentence($nbWords = 1, $variableNbWords = true));
            $association-> setPassword('association');
            $association-> setEmail('association@gmail.com');
            $association-> setRna('123456789');
            //$association-> setRoles($adoptant);
            $association-> setManager($faker->unique()->firstName());
            $association-> setPhone($faker->unique()->e164PhoneNumber());
            $association-> setWebsite('www.web.com');
            $association-> setDescription($faker->sentence($nbWords = 15, $variableNbWords = true));
            $association-> setCreatedAt($faker->dateTimeThisYear($max = 'now', $timezone = null));
            $association-> setAddress($adress);
            $manager->persist($association);
            $animal-> setAssociation($association);
            $manager->persist($animal);
        
            for($comments = 0; $comments < mt_rand(0,8); $comments++ ){
                $commentary = new Commentary();
                //I do a set User for the comment to be linked to this one and same for Association
                $commentary->setUser($users);
                $commentary->setAssociation($association);
                $commentary->setBody($faker->sentence($nbWords = 15, $variableNbWords = true));
                $commentary->setCreatedAt($faker->dateTimeThisYear($max = 'now', $timezone = null));
                $manager->persist($commentary);
                }
            }
            }
            }
            $manager->flush();
        }

    }
